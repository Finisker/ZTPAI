package com.ztpai.backend.profession;

import com.ztpai.backend.ability.Ability;
import com.ztpai.backend.attribute.Attribute;
import com.ztpai.backend.socialClass.SocialClass;
import com.ztpai.backend.talent.Talent;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter(AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "profession")
public class Profession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(
            name = "name",
            nullable = false,
            unique = true
    )
    private String name;

    private String path;

    private String description;

    private String socialStatus;

    private String equipment;

    private int level;

    @OneToOne
    private SocialClass socialClass;

    @OneToMany
    private Set<Ability> abilitySet;

    @OneToMany
    private Set<Talent> talentSet;

    @OneToMany
    private Set<Attribute> attributeSet;
}