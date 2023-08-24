package com.ztpai.backend.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    Optional<User> findByUniqueID(String uniqueID);

    Optional<User> findByLogin(String login);

    Optional<User> findByEmail(String email);
}
