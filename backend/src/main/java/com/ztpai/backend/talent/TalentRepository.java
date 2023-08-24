package com.ztpai.backend.talent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TalentRepository extends JpaRepository<Talent,Long> {
}
