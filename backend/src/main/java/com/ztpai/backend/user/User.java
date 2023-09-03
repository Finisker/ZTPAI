package com.ztpai.backend.user;

import com.ztpai.backend.character.Character;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="my_user")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "my_user_id")
    private int userId;

    @Basic
    @Generated(GenerationTime.INSERT)
    @Column(name = "unique_id", unique = true,columnDefinition = "varchar(255) default '#'::text || lpad(((nextval('my_user_my_user_id_seq'::regclass))::character varying)::text, 5, '0'::text)")
    private String uniqueID;

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

    @Enumerated(EnumType.STRING)
    private Role role;

    public User(String login, String password, String email, String nickname, Set<Character> characterSet) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.characterSet = characterSet;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
