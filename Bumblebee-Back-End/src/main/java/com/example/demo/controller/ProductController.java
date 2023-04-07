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
import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/product/")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;
	

	//get all Product rest api
	@GetMapping("/products")
	private List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	// create products rest api
	@PostMapping("/saveproducts")
	public Product createProduct(@RequestBody Product product) {
		return productRepository.save(product);
	}

	// get Product by Id rest api
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable Long id) {
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id : " + id));
		return ResponseEntity.ok(product);
	}

	// update Product rest api
	@PutMapping("/product/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable Long id,@RequestBody Product product) {
		Product products = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id : " + id));
		products.setTitle(product.getTitle());
		products.setDescription(product.getDescription());
		products.setPrice(product.getPrice());
		products.setCategory(product.getCategory());
		products.setImage(product.getImage());
		
		Product updateProduct = productRepository.save(products);
		return ResponseEntity.ok(updateProduct);

	}
	
	
	//delete Product rest api
	@DeleteMapping("/product/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id){
		Product products = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id : " + id));
		productRepository.delete(products);
		Map<String, Boolean>response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
