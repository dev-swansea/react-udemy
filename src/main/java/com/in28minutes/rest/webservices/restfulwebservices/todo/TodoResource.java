package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoResource {

  private final TodoService todoService;

  public TodoResource(TodoService todoService) {
    this.todoService = todoService;
  }

  @GetMapping("/users/{username}/todos")
  public List<Todo> retrieveTodos(@PathVariable String username) {
    return todoService.findByUsername(username);
  }

  @GetMapping("/users/{username}/todos/{id}")
  public Todo retrieveTodo(@PathVariable String username, @PathVariable int id) {
    return todoService.findById(id);
  }

  @DeleteMapping("/users/{username}/todos/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable int id) {
    todoService.deleteById(id);
    return ResponseEntity.noContent().build();
  }

  @RequestMapping(value = "/users/{username}/todos/{id}", method = {RequestMethod.PUT, RequestMethod.PATCH})
  public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo) {
    System.out.println("todos => " + todo);
    todoService.updateTodo(todo);
    return new ResponseEntity(todo, HttpStatus.OK);
  }

  @PostMapping("/users/{username}/todos")
  public ResponseEntity<Void> saveTodo(@PathVariable String username, @RequestBody Todo todo) {
    todo.setId(null);
    Todo saveTodo = todoService.addTodo(todo);
    return new ResponseEntity(saveTodo, HttpStatus.OK);
  }
}
