package com.ztpai.backend.user;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserResponse {
    String name;
    String id;
}
