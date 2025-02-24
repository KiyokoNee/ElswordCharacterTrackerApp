package com.gearing.server.mappers;

import com.gearing.server.dto.CharacterDTO;
import com.gearing.server.models.CharacterSlot;

public class CharacterMapper {

    // Converts Character object into a transferable version of data
    public static CharacterDTO characterToCharacterDTO(CharacterSlot characterSlot) {
        return new CharacterDTO(
                characterSlot.getId(),
                characterSlot.getNickname(),
                characterSlot.getCharacterName(),
                characterSlot.getRole(),
                characterSlot.getRoleId(),
                characterSlot.getStage()
        );
    }

    // Converts response body into a Character object
    public static CharacterSlot characterDTOToCharacter(CharacterDTO characterDTO) {
        return new CharacterSlot(
                characterDTO.getId(),
                characterDTO.getNickname(),
                characterDTO.getCharacterName(),
                characterDTO.getRole(),
                characterDTO.getRoleId(),
                characterDTO.getStage()
        );
    }
}
