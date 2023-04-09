package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.model.Payment;
import com.example.demo.repository.PaymentRepository;

@SpringBootTest
public class TestngForPayment {
	@Autowired
	PaymentRepository paymentRepository;

	@Test
	public void testSavePayment() {
		Payment payment = new Payment();
		payment.setId(13L);
		payment.setName("Indula");
		payment.setAddress("Attidiya");
		payment.setMobile("0768544031");
		payment.setNote("Deliver to  My Home");
		payment.setTotal("7500");
		payment.setDividedAmount("2500");
		paymentRepository.save(payment);
		assertNotNull(paymentRepository.findById(13L).get());
	}

	@Test
	public void testAllData() {
		List<Payment> list1 = paymentRepository.findAll();
		assertThat(list1).size().isGreaterThan(0);
	}
}
