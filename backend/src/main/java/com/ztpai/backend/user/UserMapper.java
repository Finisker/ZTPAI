package com.ztpai.backend.user;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;


public class UserMapper implements Function<User,UserResponse> {
    @Override
    public UserResponse apply(User user) {
        return UserResponse.builder()
                .name(user.getNickname())
                .id(user.getUniqueID())
                .build();
    }

    public List<UserResponse> mapUsers(List<User> users) {
        return users.stream()
                .map(this)
                .collect(Collectors.toList());
    }


}
