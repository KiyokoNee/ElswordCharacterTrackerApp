package com.gearing.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gearing.server.models.CharacterSlot;

import java.util.List;

@Repository
public interface CharacterRepository extends JpaRepository<CharacterSlot, Long> {
    List<CharacterSlot> findAllByCreatorId(Long id);
}
