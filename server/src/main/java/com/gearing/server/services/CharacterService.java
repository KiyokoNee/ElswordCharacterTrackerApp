package com.gearing.server.services;

import com.gearing.server.dto.CharacterDTO;
import com.gearing.server.exception.ResourceNotFoundException;
import com.gearing.server.mappers.CharacterMapper;
import com.gearing.server.models.CharacterSlot;
import com.gearing.server.repositories.CharacterRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CharacterService {
    @Autowired
    private CharacterRepository characterRepo;

    public CharacterDTO createCharacter(CharacterDTO characterDTO) {
        CharacterSlot characterSlot = CharacterMapper.characterDTOToCharacter(characterDTO);
        CharacterSlot savedCharacterSlot = characterRepo.save(characterSlot);
        return CharacterMapper.characterToCharacterDTO(savedCharacterSlot);
    }

    public CharacterDTO getCharacterById(Long id) {
        CharacterSlot characterSlot = characterRepo.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Character does not exist with id: " + id)
                );
        return CharacterMapper.characterToCharacterDTO(characterSlot);
    }

    public List<CharacterDTO> getAllCharacters() {
        List<CharacterSlot> characterSlots = characterRepo.findAll();
        // in the return convert Character objects to CharacterDTO objects using lamda expression
        return characterSlots.stream().map((characterSlot) -> CharacterMapper.characterToCharacterDTO(characterSlot)).collect(Collectors.toList());
    }

    public CharacterDTO updateCharacter(Long id, CharacterDTO characterDTO) {
        CharacterSlot characterSlot = characterRepo.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Character does not exist with id: " + id)
                );
        characterSlot.setNickname(characterDTO.getNickname());
        characterSlot.setStage(characterDTO.getStage());
        characterSlot.setRole(characterDTO.getRole());
        characterSlot.setRoleId(characterDTO.getRoleId());

        CharacterSlot updatedCharacterSlot = characterRepo.save(characterSlot);

        return CharacterMapper.characterToCharacterDTO(updatedCharacterSlot);
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
