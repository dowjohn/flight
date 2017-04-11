package com.cooksys.service;

import com.cooksys.entity.User;
import com.cooksys.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public boolean login(User user) {
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()) != null;
    }

    public User post(User user) {
        Long idOf = userRepository.saveAndFlush(user).getId();
        return userRepository.findOne(idOf);
    }
}
