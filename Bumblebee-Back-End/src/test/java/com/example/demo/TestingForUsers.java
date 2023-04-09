package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;

@SpringBootTest
public class TestingForUsers {
	@Autowired
	UsersRepository usersRepository;
	
	@Test
	public void testSaveUsers() {
		Users users = new Users();
		users.setId(13L);
		users.setName("indula");
		users.setAddress("Attidiya");
		users.setDob("2000-01-10");
		users.setMobile("0768544031");
		users.setPassword("1234");
		usersRepository.save(users);
		assertNotNull(usersRepository.findById(13L).get());
	}

	@Test
	public void testReadAll() {
		List<Users> list = usersRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void testSingleUser() {
		Users users = usersRepository.findById(13L).get();
		assertEquals("Attidiya", users.getAddress());
	}

	@Test
	public void testUpdateUser() {
		Users users = usersRepository.findById(13L).get();
		users.setName("Indula Perera");
		usersRepository.save(users);
		assertNotEquals("indula", usersRepository.findById(13L).get().getName());
	}

	@Test
	public void testDelete() {
		usersRepository.deleteById(13L);
		assertThat(usersRepository.existsById(13L)).isFalse();
	}

}
