package com.ztpai.backend.character;

import com.ztpai.backend.joinTables.CharacterAbilityMapping;
import com.ztpai.backend.joinTables.CharacterAttributeMapping;
import com.ztpai.backend.joinTables.CharacterTalentMapping;
import com.ztpai.backend.profession.Profession;
import com.ztpai.backend.race.Race;
import com.ztpai.backend.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "character")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

    @Column(
            name = "name",
            nullable = false
    )
    private String name;

    private int experience;

    @OneToOne
    private Race race;

    @OneToOne
    private Profession profession;

    @OneToMany(mappedBy = "character")
    private Set<CharacterAttributeMapping> characterAttributeMappingSet;

    @OneToMany(mappedBy = "character")
    private Set<CharacterTalentMapping> characterTalentMappingSet;

    @OneToMany(mappedBy = "character")
    private Set<CharacterAbilityMapping> characterAbilityMappingSet;
}