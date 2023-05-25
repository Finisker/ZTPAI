package com.ztpai.backend.user;

import jakarta.persistence.*;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity(name = "my_user")
public class MyUser {

    @Id
    @SequenceGenerator(
            name = "my_user_sequence",
            sequenceName = "my_user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "my_user_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    private Long id;

    @Column(
            name = "login",
            nullable = false,
            unique = true
    )
    private String login;

    @Column(
            name = "password",
            nullable = false
    )
    private String password;

}
