package com.ztpai.backend.profession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessionService {

    private final ProfessionRepository professionRepository;

    @Autowired
    public ProfessionService(ProfessionRepository professionRepository) {
        this.professionRepository = professionRepository;
    }

    public List<Profession> getProfessions(){
        return professionRepository.findAll();
    }
}
