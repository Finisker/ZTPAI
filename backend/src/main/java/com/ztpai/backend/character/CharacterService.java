package com.ztpai.backend.character;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.ztpai.backend.character.CharacterController.logger;

@Service
public class CharacterService {

    private final CharacterRepository characterRepository;

    @Autowired
    public CharacterService(CharacterRepository characterRepository) {
        this.characterRepository = characterRepository;
    }

    public List<Character> getCharacters(){

        var characters = characterRepository.findAll();
        logger.info("Character Controller" + characters);
        return characters;
    }

    public void addNewCharacter(Character character) {
        characterRepository.save(character);
    }
}
