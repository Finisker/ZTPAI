package com.ztpai.backend.socialClass;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter(AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "social_class")
public class SocialClass {

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
            name = "equipment"
    )
    private String equipment;
}
