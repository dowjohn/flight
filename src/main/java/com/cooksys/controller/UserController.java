package com.cooksys.controller;

import com.cooksys.entity.User;
import com.cooksys.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;


    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public boolean login(@RequestBody User user, HttpServletResponse httpResponse) {
        httpResponse.setStatus(HttpServletResponse.SC_OK);
        return userService.login(user);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/create")
    public User post(@RequestBody User user, HttpServletResponse httpResponse) {
        User output = userService.post(user);
        if (output != null) {
            httpResponse.setStatus(HttpServletResponse.SC_CREATED);
            return output;
        } else {
            httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return null;
        }
    }
}
