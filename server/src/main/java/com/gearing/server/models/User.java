package com.gearing.server.models;

import com.gearing.server.validation.PasswordMatch;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "First name is required!")
    @Size(min = 2, message = "First name must be at least 2 characters long!")
    private String firstName;
    @NotBlank(message = "Last name is required!")
    @Size(min = 2, message = "Last name must be at least 2 characters long!")
    private String lastName;
    @NotBlank(message = "Email is required!")
    @Email(message = "Please enter a valid email!")
    @Column(unique = true)
    private String email;
    @NotBlank(message = "Password is required!")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,128}$",
            message = "Password must meet the following criteria: <br>"
                    + "Between 8-128 characters, <br>"
                    + "at least one uppercase letter, <br>"
                    + "one lowercase letter, one digit, <br>"
                    + "and one special character.")
    private String password;

    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private List<Character> characterList;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "main_id")
    private Character main;

    public User() {}

    public User(Long id, String firstName, String lastName, String email, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
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

    public List<Character> getCharacterList() {
        return characterList;
    }

    public void setCharacterList(List<Character> characterList) {
        this.characterList = characterList;
    }

    public Character getMain() {
        return main;
    }

    public void setMain(Character main) {
        this.main = main;
    }
}
