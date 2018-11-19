package anapw.demo.controllers;

import anapw.demo.entities.Orders;
import anapw.demo.repositories.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/order")
@CrossOrigin("http://localhost:3000")
public class OrderController {

    private final OrderRepository orderRepository;

    @GetMapping(path = "/{email}")
    public List<Orders> getOrders(@PathVariable("email") String email) {
        return orderRepository.findAllByEmail(email);
    }

    @PostMapping
    public void add(@RequestBody Orders order) {

        order.setLocalDate(LocalDate.now());
        orderRepository.save(order);
    }

}
