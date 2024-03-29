package com.ztpai.backend.joinTables;

import com.ztpai.backend.ability.Ability;
import com.ztpai.backend.character.Character;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "character_ability_mapping")
public class CharacterAbilityMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "character_id")
    private Character character;

    @ManyToOne
    @JoinColumn(name = "ability_id")
    private Ability ability;

    private int value;
}
