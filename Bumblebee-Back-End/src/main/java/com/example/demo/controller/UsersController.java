package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/users/")
public class UsersController {

	@Autowired
	private UsersRepository usersRepository;

	// get all Users rest api
	@GetMapping("/getusers")
	private List<Users> getAllUsers() {
		return usersRepository.findAll();
	}

	// create users rest api
	@PostMapping("/saveusers")
	public Users createUsers(@RequestBody Users users) {
		return usersRepository.save(users);
	}

	// get User by Id rest api
	@GetMapping("/getusers/{id}")
	public ResponseEntity<Users> getUsersById(@PathVariable Long id) {
		Users users = usersRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException
						("Customer not exist with id : " + id));
		return ResponseEntity.ok(users);
	}

	// update User rest api
	@PutMapping("/getusers/{id}")
	public ResponseEntity<Users> updateUsers(@PathVariable Long id, @RequestBody Users dusers) {
		Users users = usersRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id : " + id));
		users.setName(dusers.getName());
		users.setDob(dusers.getDob());
		users.setMobile(dusers.getMobile());
		users.setAddress(dusers.getAddress());
		users.setPassword(dusers.getPassword());

		Users updateUsers = usersRepository.save(users);
		return ResponseEntity.ok(updateUsers);
	}

	// delete User rest api
	@DeleteMapping("/getusers/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
		Users users = usersRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException
						("Customer not exist with id : " + id));
		
		usersRepository.delete(users);
		Map<String, Boolean>response = new HashMap<>();	
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
