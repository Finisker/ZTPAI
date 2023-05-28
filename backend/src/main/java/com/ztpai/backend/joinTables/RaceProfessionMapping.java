package com.ztpai.backend.joinTables;

import com.ztpai.backend.profession.Profession;
import com.ztpai.backend.race.Race;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter(AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "race_profession_mapping")
public class RaceProfessionMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "race_id")
    private Race race;

    @ManyToOne
    @JoinColumn(name = "profession_id")
    private Profession profession;

    private int basicChance;
}
