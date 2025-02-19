package com.gearing.server.mappers;

import com.gearing.server.dto.CharacterDTO;
import com.gearing.server.models.Character;

public class CharacterMapper {

    // Converts Character object into a transferrable version of data
    public static CharacterDTO characterToCharacterDTO(Character character) {
        CharacterDTO characterDTO = new CharacterDTO();

        characterDTO.setId(character.getId());
        characterDTO.setCharacterName(character.getCharacterName());
        characterDTO.setNickname(character.getNickname());
        characterDTO.setRole(character.getRole());
        characterDTO.setRoleId(character.getRoleId());
        characterDTO.setStage(character.getStage());
        return characterDTO;
    }

    // Converts response body into a Character object
    public static Character characterDTOToCharacter(CharacterDTO characterDTO) {
        Character newChar = new Character();

        newChar.setId(characterDTO.getId());
        newChar.setCharacterName(characterDTO.getCharacterName());
        newChar.setRole(characterDTO.getRole());
        newChar.setRoleId(characterDTO.getRoleId());
        newChar.setStage(characterDTO.getStage());
        newChar.setNickname(characterDTO.getNickname());

        return newChar;
    }
}
