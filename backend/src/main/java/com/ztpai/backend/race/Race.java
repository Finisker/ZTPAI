package com.ztpai.backend.race;

import com.ztpai.backend.ability.Ability;
import com.ztpai.backend.joinTables.RaceAttributeMapping;
import com.ztpai.backend.joinTables.RaceProfessionMapping;
import com.ztpai.backend.joinTables.RaceTalentChoiceMapping;
import com.ztpai.backend.talent.Talent;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter(AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "race")
public class Race {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(
            name = "name",
            nullable = false,
            unique = true
    )
    private String name;

    @Column(
            name = "description"
    )
    private String description;

    @OneToMany
    private Set<Ability> abilitySet;

    @OneToMany
    private Set<Talent> talentSet;

    @OneToMany(mappedBy = "race")
    private Set<RaceAttributeMapping> raceAttributeMappingSet;

    @OneToMany(mappedBy = "race")
    private Set<RaceTalentChoiceMapping> raceTalentChoiceMappingSet;

    @OneToMany(mappedBy = "race")
    private Set<RaceProfessionMapping> raceProfessionMappingSet;
}