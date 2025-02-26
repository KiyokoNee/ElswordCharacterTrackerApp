package com.gearing.server.controllers;

import com.gearing.server.dto.RegisterUserDTO;
import com.gearing.server.dto.UserDTO;
import com.gearing.server.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/admin")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@Valid @RequestBody RegisterUserDTO registerUserDTO) {
        UserDTO userDTO = userService.registerUser(registerUserDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }

}
