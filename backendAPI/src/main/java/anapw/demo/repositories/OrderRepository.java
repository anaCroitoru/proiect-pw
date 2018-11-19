package anapw.demo.repositories;

import anapw.demo.entities.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Orders,Integer> {
    List<Orders> findAllByEmail(String email);
}
