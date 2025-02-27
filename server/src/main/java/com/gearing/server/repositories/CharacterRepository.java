package com.gearing.server.repositories;

import com.gearing.server.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gearing.server.models.Character;

import java.util.List;

@Repository
public interface CharacterRepository extends JpaRepository<Character, Long> {
    List<Character> findCharactersByOwner(User owner);
}
