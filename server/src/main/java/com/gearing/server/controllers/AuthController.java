package com.gearing.server.controllers;

import com.gearing.server.models.LoginUser;
import com.gearing.server.models.User;
import com.gearing.server.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable("id") Long id){
        return userService.getUser(id);
    }

    @PostMapping("/register")
    public ResponseEntity<User> newUser(@RequestBody() User user){
        User newUser = userService.addUser(user);
        if(newUser == null)
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginUser loginUser, HttpSession session) {
        try{
            boolean isAuthenticated = userService.authenticate(loginUser.getEmail(),loginUser.getPassword());

            if (isAuthenticated){
                session.setAttribute("user", loginUser.getEmail());
                return ResponseEntity.ok("Login was successful!");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unknown error occurred");
        }
    }
}
