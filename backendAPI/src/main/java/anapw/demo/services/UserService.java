package anapw.demo.services;

import anapw.demo.entities.User;
import anapw.demo.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void createCustomer(User user) {
        userRepository.save(user);
    }

    public User validate(String email, String password) {
        val byEmailAndPassword = userRepository.findByEmailAndPassword(email, password);
        if(byEmailAndPassword==null){
            throw new NullPointerException();
        }
        return  byEmailAndPassword;
    }
}
