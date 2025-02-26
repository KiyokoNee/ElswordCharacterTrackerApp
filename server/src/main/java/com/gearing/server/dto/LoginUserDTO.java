package com.gearing.server.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class LoginUserDTO {
    private Long id;
    @NotBlank(message = "Email is required!")
    @Email(message = "Please enter a valid email")
    private String email;
    @NotBlank(message = "Password is required!")
    private String password;

    public LoginUserDTO() {}

    public LoginUserDTO(Long id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
