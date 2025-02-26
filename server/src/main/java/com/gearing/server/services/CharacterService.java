package com.gearing.server.services;

import com.gearing.server.dto.CharacterDTO;
import com.gearing.server.exception.ResourceNotFoundException;
import com.gearing.server.mappers.CharacterMapper;
import com.gearing.server.repositories.CharacterRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gearing.server.models.Character;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CharacterService {
    @Autowired
    private CharacterRepository characterRepo;

    public CharacterDTO createCharacter(CharacterDTO characterDTO) {
        Character character = CharacterMapper.characterDTOToCharacter(characterDTO);
        Character savedCharacter = characterRepo.save(character);
        return CharacterMapper.characterToCharacterDTO(savedCharacter);
    }

    public CharacterDTO getCharacterById(Long id) {
        Character character = characterRepo.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Character does not exist with id: " + id)
                );
        return CharacterMapper.characterToCharacterDTO(character);
    }

    public List<CharacterDTO> getAllCharacters() {
        List<Character> characters = characterRepo.findAll();
        // in the return convert Character objects to CharacterDTO objects using lambda expression
        return characters.stream().map((character) -> CharacterMapper.characterToCharacterDTO(character)).collect(Collectors.toList());
    }

    public CharacterDTO updateCharacter(Long id, CharacterDTO characterDTO) {
        Character character = characterRepo.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Character does not exist with id: " + id)
                );
        character.setNickname(characterDTO.getNickname());
        character.setCharacterName(characterDTO.getCharacterName());
        character.setStage(characterDTO.getStage());
        character.setRole(characterDTO.getRole());
        character.setRoleId(characterDTO.getRoleId());

        Character updatedCharacter = characterRepo.save(character);

        return CharacterMapper.characterToCharacterDTO(updatedCharacter);
    }

    public void deleteCharacter(Long id) {
        // check that character exists
        characterRepo.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Character does not exist with id: " + id)
                );

        characterRepo.deleteById(id);
    }
}
