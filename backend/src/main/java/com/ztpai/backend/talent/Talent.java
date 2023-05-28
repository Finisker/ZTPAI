package com.ztpai.backend.talent;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter(AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "talent")
public class Talent {

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
            name = "max_buyable"
    )
    private int maxBuyable;

    @Column(
            name = "tests"
    )
    private String tests;

    @Column(
            name = "description"
    )
    private String description;

    @Column(
            name = "specializations"
    )
    private String specializations;

    @Column(
            name = "random"
    )
    private boolean random;
}
