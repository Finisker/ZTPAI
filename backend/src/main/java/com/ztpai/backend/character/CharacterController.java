package com.ztpai.backend.character;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/characters")
@CrossOrigin(origins = "http://localhost:4200")
public class CharacterController {

    private final CharacterService characterService;

    @Autowired
    public CharacterController(CharacterService characterService) {
        this.characterService = characterService;
    }

    @GetMapping("/all")
    public List<Character> getCharacters() {
        return characterService.getCharacters();
    }

    @PostMapping("/register")
    public void registerNewCharacter(@RequestBody Character user){
        characterService.addNewCharacter(user);
    }

}
