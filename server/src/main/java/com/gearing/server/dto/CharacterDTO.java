package com.gearing.server.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;

public class CharacterDTO {
    private Long id;
    @Column(unique = true)
    private String nickname;
    @NotBlank
    private String characterName;
    @NotBlank
    private String role;
    @NotBlank
    private String roleId;
    @NotBlank
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
