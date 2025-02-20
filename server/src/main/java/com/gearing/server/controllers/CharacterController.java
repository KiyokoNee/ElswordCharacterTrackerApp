package com.gearing.server.controllers;

import com.gearing.server.dto.CharacterDTO;
import com.gearing.server.services.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/characters")
public class CharacterController {
    @Autowired
    private CharacterService characterService;

    @PostMapping
    public ResponseEntity<CharacterDTO> addCharacter(@RequestBody CharacterDTO characterDTO) {
        CharacterDTO savedCharacter = characterService.createCharacter(characterDTO);
        return new ResponseEntity<>(savedCharacter, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CharacterDTO> getCharacterById(@PathVariable("id") Long characterId) {
        CharacterDTO character = characterService.getCharacterById(characterId);
        return ResponseEntity.ok(character);
    }

    @GetMapping
    public ResponseEntity<List<CharacterDTO>> getAllCharacters() {
        List<CharacterDTO> characters = characterService.getAllCharacters();
        return ResponseEntity.ok(characters);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CharacterDTO> updateCharacter(@PathVariable("id") Long characterId, @RequestBody CharacterDTO characterDTO) {
        CharacterDTO updatedCharacter = characterService.updateCharacter(characterId, characterDTO);
        return ResponseEntity.ok(updatedCharacter);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCharacter(@PathVariable("id") Long characterId) {
        characterService.deleteCharacter(characterId);

        return ResponseEntity.ok("Character deleted successfully.");
    }
}
