package com.ztpai.backend.joinTables;

import com.ztpai.backend.attribute.Attribute;
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
@Entity(name = "character_attribute_mapping")
public class CharacterAttributeMapping {

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
