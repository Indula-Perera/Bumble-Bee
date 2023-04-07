package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Payment;
import com.example.demo.repository.PaymentRepository;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/payment/")
public class PaymentController {
	@Autowired
	private PaymentRepository paymentRepository;
	
	
	// get all Product rest api
		@GetMapping("/payment")
		private List<Payment> getAllProducts() {
			return paymentRepository.findAll();
		}

		// create products rest api
		@PostMapping("/savepayment")
		public Payment createProduct(@RequestBody Payment payment) {
			return paymentRepository.save(payment);
		}
	
}
