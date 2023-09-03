package com.ztpai.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public User getUserById(Integer id) {
        return userRepository.findById(id).orElseThrow( () -> new UsernameNotFoundException("User not found"));
    }

    public void addUser(User user) {
        Optional<User> userOptional = userRepository.findByLogin(user.getLogin());
        Optional<User> userOptional2 = userRepository.findByEmail(user.getLogin());

        if (userOptional.isPresent()){
            throw new IllegalStateException("login taken");
        }

        if (userOptional2.isPresent()){
            throw new IllegalStateException("email taken");
        }

        userRepository.save(user);
    }
}
