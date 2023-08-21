package com.ztpai.backend.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashSet;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository){
        return args -> {
            MyUser test = new MyUser("test2","test2","test2","test2",new HashSet<>());

            userRepository.save(test);
        };
    }
}
