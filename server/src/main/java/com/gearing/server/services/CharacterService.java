package com.gearing.server.services;

import com.gearing.server.dto.CharacterDTO;
import com.gearing.server.exception.ResourceNotFoundException;
import com.gearing.server.mappers.CharacterMapper;
import com.gearing.server.repositories.CharacterRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gearing.server.models.Character;

@Service
@Transactional
public class CharacterService {
    @Autowired
    private CharacterRepository characterRepo;

    public CharacterDTO createCharacter(CharacterDTO characterDTO) {
        Character character = CharacterMapper.characterDTOToCharacter(characterDTO);
        characterRepo.save(character);
        return CharacterMapper.characterToCharacterDTO(character);
    }

    public CharacterDTO getCharacterById(Long id) {
        characterRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Character does not exist with id: " + id));
        return new CharacterDTO();
    }
}
