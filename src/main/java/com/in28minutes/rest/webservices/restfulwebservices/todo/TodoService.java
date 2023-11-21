package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import com.in28minutes.rest.webservices.restfulwebservices.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

  @Autowired
  private TodoRepository todoRepository;

  public List<Todo> findByUsername(String username) {
    return todoRepository.findByUsername(username).orElseThrow();
  }

  public Todo addTodo(Todo todo) {
    todoRepository.save(todo);
    return todo;
  }

  public void deleteById(int id) {
    todoRepository.deleteById(id);
  }

  public Todo findById(int id) {
    return todoRepository.findById(id).orElseThrow(IllegalArgumentException::new);

  }

  public void updateTodo(Todo todo) {
    todoRepository.save(todo);
  }
}