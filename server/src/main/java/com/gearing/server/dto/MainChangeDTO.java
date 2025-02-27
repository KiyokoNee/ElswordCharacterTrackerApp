package com.gearing.server.dto;

public class MainChangeDTO {
    private Long userId;
    private Long characterId;

    public MainChangeDTO() {}

    public MainChangeDTO(Long userId, Long characterId) {
        this.userId = userId;
        this.characterId = characterId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getCharacterId() {
        return characterId;
    }

    public void setCharacterId(Long characterId) {
        this.characterId = characterId;
    }
}
