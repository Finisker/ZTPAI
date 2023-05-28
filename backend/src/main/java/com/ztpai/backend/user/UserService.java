package com.ztpai.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
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

    public List<MyUser> getUsers(){
        return userRepository.findAll();
    }

    public void addNewUser(MyUser user) {
        Optional<MyUser> userOptional = userRepository.findUserByLogin(user.getLogin());

        if (userOptional.isPresent()){
            throw new IllegalStateException("login taken");
        }

        userRepository.save(user);
    }
}
