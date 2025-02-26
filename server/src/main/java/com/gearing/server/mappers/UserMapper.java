package com.gearing.server.mappers;

import com.gearing.server.dto.LoginUserDTO;
import com.gearing.server.dto.RegisterUserDTO;
import com.gearing.server.dto.UserDTO;
import com.gearing.server.models.User;

public class UserMapper {

    public static UserDTO userToUserDTO(User user) {
        return new UserDTO(
                user.getId(),
                user.getFirstName(),
                user.getLastName()
        );
    }

    public static User registerUserDTOToUser(RegisterUserDTO registerUserDTO) {
        return new User(
                registerUserDTO.getId(),
                registerUserDTO.getFirstName(),
                registerUserDTO.getLastName(),
                registerUserDTO.getEmail(),
                registerUserDTO.getPassword()
        );
    }
}
