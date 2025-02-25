package com.gearing.server.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CharacterDTO {
    private Long id;
    @NotBlank(message = "Nickname is required!")
    @Column(unique = true)
    @Size(min = 6, max = 12, message = "Nickname must be between 6 and 12 characters long!")
    private String nickname;
    @NotBlank(message = "Character is required!")
    @Size(min = 3, max = 7, message = "Character must be between 3 and 7 characters long!")
    private String characterName;
    @NotBlank(message = "Class is required!")
    @Size(min = 5, message = "Class must be at least 5 characters long!")
    private String role;
    @NotBlank(message = "Class code is required!")
    @Size(min = 2, max = 5, message = "Class Code must be between 2 and 5 characters long!")
    private String roleId;
    @NotBlank(message = "Stage is required!")
    private String stage;

    public CharacterDTO() {}

    public CharacterDTO(Long id, String nickname, String characterName, String role, String roleId, String stage) {
        this.id = id;
        this.nickname = nickname;
        this.characterName = characterName;
        this.role = role;
        this.roleId = roleId;
        this.stage = stage;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getCharacterName() {
        return characterName;
    }

    public void setCharacterName(String characterName) {
        this.characterName = characterName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    public String getStage() {
        return stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }
}
