package com.gearing.server.mappers;

import com.gearing.server.dto.CharacterDTO;
import com.gearing.server.models.Character;
import com.gearing.server.models.User;
import com.gearing.server.services.UserService;

public class CharacterMapper {
    private static final UserService userService = new UserService();

    // Converts Character object into a transferable version of data
    public static CharacterDTO characterToCharacterDTO(Character character) {
        return new CharacterDTO(
                character.getId(),
                character.getNickname(),
                character.getCharacterName(),
                character.getRole(),
                character.getRoleId(),
                character.getStage(),
                character.getOwner().getId()
        );
    }

    // Converts response body into a Character object
    public static Character characterDTOToCharacter(CharacterDTO characterDTO) {

        return new Character(
                characterDTO.getId(),
                characterDTO.getNickname(),
                characterDTO.getCharacterName(),
                characterDTO.getRole(),
                characterDTO.getRoleId(),
                characterDTO.getStage()
        );
    }
}
