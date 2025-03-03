package com.gearing.server.services;

import com.gearing.server.dto.LoginUserDTO;
import com.gearing.server.dto.MainChangeDTO;
import com.gearing.server.dto.RegisterUserDTO;
import com.gearing.server.dto.UserDTO;
import com.gearing.server.exception.ResourceNotFoundException;
import com.gearing.server.mappers.UserMapper;
import com.gearing.server.models.Character;
import com.gearing.server.models.User;
import com.gearing.server.repositories.CharacterRepository;
import com.gearing.server.repositories.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private CharacterService characterService;
    @Autowired
    private CharacterRepository characterRepository;

    public User findByEmail(String email) {

        return userRepo.findByEmail(email).orElseThrow(() ->
                new ResourceNotFoundException("User not found")
        );
    }

    public User findById(Long id) {
        Optional<User> optionalUser = userRepo.findById(id);

        return optionalUser.orElse(null);
    }

    public UserDTO registerUser(RegisterUserDTO registerUserDTO) {
        User user = UserMapper.registerUserDTOToUser(registerUserDTO);
        String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashed);

        return UserMapper.userToUserDTO(userRepo.save(user));
    }

    public UserDTO loginUser(LoginUserDTO loginUserDTO) {
        User user = findByEmail(loginUserDTO.getEmail());

        return UserMapper.userToUserDTO(user);
    }

    public UserDTO changeMain(MainChangeDTO mainChangeDTO) {
        Optional<User> optionalUser = userRepo.findById(mainChangeDTO.getUserId());
        Optional<Character> optionalCharacter = characterRepository.findById(mainChangeDTO.getCharacterId());
        if(optionalUser.isEmpty() || optionalCharacter.isEmpty()) {
            return null;
        }
        User user = optionalUser.get();
        Character character = optionalCharacter.get();

        user.setMain(character);
        return UserMapper.userToUserDTO(userRepo.save(user));

    }
}
