package com.ztpai.backend.ability;

import com.ztpai.backend.attribute.Attribute;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter(AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "ability")
public class Ability {

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
            name = "description",
            length = 1023
    )
    private String description;

    @ManyToOne
    @JoinColumn(name = "attribute_id",nullable = false)
    private Attribute attribute;

    @Column(
            name = "specializations"
    )
    private String specializations;

    @Column(
            name = "advanced"
    )
    private boolean advanced;

}
