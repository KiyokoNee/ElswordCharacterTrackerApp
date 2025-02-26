package com.gearing.server.dto;

import com.gearing.server.validation.PasswordMatch;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@PasswordMatch(
        password = "password",
        confirmPassword = "confirmPassword"
)
public class RegisterUserDTO {
    private Long id;
    @NotBlank(message = "First name is required!")
    @Size(min = 2, message = "First name must be at least 2 characters long!")
    private String firstName;
    @NotBlank(message = "Last name is required!")
    @Size(min = 2, message = "Last name must be at least 2 characters long!")
    private String lastName;
    @NotBlank(message = "Email is required!")
    @Email(message = "Please enter a valid email!")
    private String email;
    @NotBlank(message = "Password is required!")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,128}$",
            message = "Password must meet the following criteria: <br>"
                    + "Between 8-128 characters, <br>"
                    + "at least one uppercase letter, <br>"
                    + "one lowercase letter, one digit, <br>"
                    + "and one special character.")
    private String password;
    private String confirmPassword;

    public RegisterUserDTO() {}

    public RegisterUserDTO(Long id, String firstName, String lastName, String email, String password, String confirmPassword) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
