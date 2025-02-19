package com.gearing.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gearing.server.models.Character;

@Repository
public interface CharacterRepository extends JpaRepository<Character, Long> {
}
