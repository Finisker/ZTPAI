package com.ztpai.backend.user;

import com.ztpai.backend.character.Character;
import com.ztpai.backend.security.token.Token;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
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

    @OneToMany(mappedBy = "user" ,cascade = CascadeType.ALL)
    private List<Token> tokens;

    public User(String password, String email, String nickname, Set<Character> characterSet) {
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.characterSet = characterSet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return userId == user.userId && Objects.equals(email, user.email) && Objects.equals(password, user.password) && Objects.equals(nickname, user.nickname)  && Objects.equals(uniqueID, user.uniqueID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, email, password, nickname, uniqueID);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
