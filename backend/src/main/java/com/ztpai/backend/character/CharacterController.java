package com.ztpai.backend.character;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping(path = "api/v1/characters")
@CrossOrigin(origins = "http://localhost:4200")
public class CharacterController {

    private final CharacterService characterService;

    public static Logger logger=Logger.getLogger("global");


    @Autowired
    public CharacterController(CharacterService characterService) {
        this.characterService = characterService;
    }

    @GetMapping("/getCharacters/{uniqueId}")
    public List<Character> getCharactersByUniqUserId(@PathVariable String uniqueId) {
        logger.info("Character Controller, uniqueId: " + uniqueId);
        return characterService.getCharactersByUniqueUserId(uniqueId);
    }

    @PostMapping("/register")
    public void registerNewCharacter(@RequestBody Character user){
        characterService.addNewCharacter(user);
    }

}
