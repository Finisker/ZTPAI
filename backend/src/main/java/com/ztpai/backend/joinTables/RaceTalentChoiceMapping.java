package com.ztpai.backend.joinTables;

import com.ztpai.backend.race.Race;
import com.ztpai.backend.talent.Talent;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter(AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "race_talent_choice")
public class RaceTalentChoiceMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "race_id")
    private Race race;

    @ManyToOne
    @JoinColumn(
            name = "talent_id",
            insertable = false,
            updatable = false
    )
    private Talent talent1;

    @ManyToOne
    @JoinColumn(
            name = "talent_id",
            insertable = false,
            updatable = false
    )
    private Talent talent2;
}
