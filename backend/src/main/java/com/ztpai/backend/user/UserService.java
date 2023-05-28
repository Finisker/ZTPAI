package com.ztpai.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        userRepository.save(user);
    }
}
