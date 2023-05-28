package com.ztpai.backend.joinTables;

import com.ztpai.backend.attribute.Attribute;
import com.ztpai.backend.character.Character;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "character_talent_mapping")
public class CharacterTalentMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "character_id")
    private Character character;

    @ManyToOne
    @JoinColumn(name = "attribute_id")
    private Attribute attribute;

    private int value;
}
