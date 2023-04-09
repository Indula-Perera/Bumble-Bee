package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@SpringBootTest
public class TestingForProduct {
	@Autowired
	ProductRepository productRepository;

	@Test
	public void testProductSave() {
		Product product = new Product();
		product.setId(14L);
		product.setTitle("Sony FE 2.0x Teleconverter");
		product.setDescription("E-Mount Teleconverter/Full-Frame Format");
		product.setCategory("Teleconverter");
		product.setPrice((long) 14500);
		product.setImage("https://s3-ap-southeast-1.amazonaws.com/media.cameralk.com/2730/1454496359_1222778.jpg");
		productRepository.save(product);
		assertNotNull(productRepository.findById(14L).get());
	}

	@Test
	public void testReadAllProduct() {
		List<Product> list1 = productRepository.findAll();
		assertThat(list1).size().isGreaterThan(0);
	}

	@Test
	public void testUpdateProduct() {
		Product product = productRepository.findById(14L).get();
		product.setCategory("Teleconverter Lens");
		productRepository.save(product);
		assertNotEquals("Teleconverter", productRepository.findById(14L).get().getCategory());
	}

	@Test
	public void testDelete() {
		productRepository.deleteById(14L);
		assertThat(productRepository.existsById(14L)).isFalse();
	}

}
