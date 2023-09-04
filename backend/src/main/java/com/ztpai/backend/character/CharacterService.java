package com.ztpai.backend.character;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {

    private final CharacterRepository characterRepository;

    @Autowired
    public CharacterService(CharacterRepository characterRepository) {
        this.characterRepository = characterRepository;
    }

    public List<Character> getCharactersByUniqueUserId(String uniqueID){
        return characterRepository.findAllCharactersByUserUniqueId(uniqueID);
    }

    public void addNewCharacter(Character character) {
        characterRepository.save(character);
    }
}
