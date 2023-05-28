package com.ztpai.backend.user;

import com.ztpai.backend.ability.Ability;
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
@Entity(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(
            name = "login",
            nullable = false,
            unique = true
    )
    private String login;

    private String nickname;

    @OneToMany
    private Set<Ability> abilitySet;

}
