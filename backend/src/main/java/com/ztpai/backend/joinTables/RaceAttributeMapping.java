package com.ztpai.backend.joinTables;

import com.ztpai.backend.attribute.Attribute;
import com.ztpai.backend.race.Race;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter(AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "race_attribute_mapping")
public class RaceAttributeMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "race_id")
    private Race race;

    @ManyToOne
    @JoinColumn(name = "attribute_id")
    private Attribute attribute;

    private int basicValue;
}
