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

    @Column(
            name = "email",
            nullable = false,
            unique = true
    )
    private String email;
    @Column(
            name = "password",
            nullable = false
    )
    private String password;

    private String nickname;

    @OneToMany(mappedBy = "user")
    private Set<Character> characterSet;

    public MyUser(String login, String password, String email, String nickname, Set<Character> characterSet) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.characterSet = characterSet;
    }
}
