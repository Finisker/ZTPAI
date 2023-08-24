package com.ztpai.backend.talent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/talent")
public class TalentController {

    private final TalentService talentService;

    @Autowired
    public TalentController(TalentService talentService) {
        this.talentService = talentService;
    }

    @GetMapping
    public List<Talent> getTalents() {
        return talentService.getTalents();
    }
}
