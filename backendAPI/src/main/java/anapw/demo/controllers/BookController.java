package anapw.demo.controllers;


import anapw.demo.entities.Book;
import anapw.demo.repositories.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/book")
@CrossOrigin("http://localhost:3000")
public class BookController {

    private final BookRepository bookRepository;

    @GetMapping
    public List<Book> validate() {
        return bookRepository.findAll();
    }

    @PostMapping
    public void add(@RequestBody Book book) {
         bookRepository.save(book);
    }
}
