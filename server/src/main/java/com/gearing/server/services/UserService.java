package com.gearing.server.services;

import com.gearing.server.models.User;
import com.gearing.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UserRepository userRepo;

    public List<User> getUsers(){
        return userRepo.findAll();
    }

    public User getUser(Long id){
        return userRepo.findById(id).orElse(null);
    }

    public User addUser(User user){
        if(!user.getPassword().equals(user.getConfirmPassword())){
            return null;
        }
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    public  User updateUser(User user) {
        return userRepo.save(user);
    }

    public void deleteUser(Long id){
        User user = userRepo.findById(id).isPresent() ? userRepo.findById(id).get() : null;
        if(user == null)
            return;
        user.getCharacterList().clear();
        userRepo.save(user);
        userRepo.deleteById(id);
    }

    public boolean authenticate(String email, String password) {
        Optional<User> user = userRepo.findByEmail(email);

        if(user.isEmpty()){
            throw new UsernameNotFoundException("User does not exist in the database");
        }

        if (!BCrypt.checkpw(password, user.get().getPassword())) {
            throw  new BadCredentialsException("The password is incorrect");
        }

        return  true;
    }
}
