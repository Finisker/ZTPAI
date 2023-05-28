package com.ztpai.backend.attribute;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter(AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "attribute")
public class Attribute {

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
            name = "description"
    )
    private String description;
}
