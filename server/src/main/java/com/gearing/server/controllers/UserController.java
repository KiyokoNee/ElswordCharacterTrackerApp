package com.gearing.server.controllers;

import com.gearing.server.dto.LoginUserDTO;
import com.gearing.server.dto.RegisterUserDTO;
import com.gearing.server.dto.UserDTO;
import com.gearing.server.exception.ResourceNotFoundException;
import com.gearing.server.mappers.UserMapper;
import com.gearing.server.models.User;
import com.gearing.server.services.UserService;
import jakarta.validation.Valid;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@Valid @RequestBody LoginUserDTO loginUserDTO) {
        Map<String, String> errors = new HashMap<>();
        try{
            User loginUser = userService.findByEmail(loginUserDTO.getEmail());

            if (loginUser == null || !BCrypt.checkpw(loginUserDTO.getPassword(), loginUser.getPassword())) {
                errors.put("email", "Invalid Credentials");
            }
            if(!errors.isEmpty()) {
                return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
            }
            UserDTO userDTO = UserMapper.userToUserDTO(loginUser);
            return new ResponseEntity<>(userDTO, HttpStatus.OK);
        } catch(ResourceNotFoundException ex) {
            errors.put("email", "Invalid Credentials");
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }
    }
}
