package anapw.demo.controllers;

import anapw.demo.entities.User;
import anapw.demo.services.UserService;
import com.fasterxml.jackson.databind.util.JSONPObject;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:3000")
public class UserController {

    private final UserService userService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody User user) {

        userService.createCustomer(user);

    }

    @GetMapping(path = "/{email}/{password}")
    public User validate(@PathVariable("email") String email,
                         @PathVariable("password") String password) {
        return userService.validate(email, password);
    }
}
