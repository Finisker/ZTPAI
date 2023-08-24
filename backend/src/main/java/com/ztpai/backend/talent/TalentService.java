package com.ztpai.backend.talent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TalentService {

    private final TalentRepository talentRepository;

    @Autowired
    public TalentService(TalentRepository talentRepository) {
        this.talentRepository = talentRepository;
    }

    public List<Talent> getTalents(){
        return talentRepository.findAll();
    }
}
