package com.ztpai.backend.user;

import com.ztpai.backend.character.Character;
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
@Entity(name = "my_user")
public class MyUser {

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

    @OneToMany(mappedBy = "user")
    private Set<Character> characterSet;

}
