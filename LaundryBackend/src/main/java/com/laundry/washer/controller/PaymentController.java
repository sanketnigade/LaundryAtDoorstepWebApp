package com.laundry.washer.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.laundry.washer.model.Payment;
import com.laundry.washer.model.ProviderRegistration;
import com.laundry.washer.service.PaymentService;

@RestController
@RequestMapping(value={"/bookorder","/customerorders","/adminorders"})
@CrossOrigin("*")
public class PaymentController {
	
	@Autowired
	private PaymentService paymentService;

	@PostMapping("/payment")
	public HttpStatus createPayment(@RequestParam("provider_id") Integer provider_id, @RequestParam("cust_id") Integer cust_id, @RequestParam("amount") Integer amount, @RequestParam("paymentMode") String paymentMode) {
		paymentService.createPayment(provider_id,cust_id,amount,paymentMode);
		return  HttpStatus.CREATED;

	}
	

	@GetMapping("/{userId}")
	public ResponseEntity<List<Payment>> getAllPaymentsByUser(@PathVariable Integer userId) {
		return ResponseEntity.ok(this.paymentService.getPaymentByCustomer(userId));

	}
	@GetMapping("/getAllByAdmin/{provId}")
	public ResponseEntity<List<Payment>> getAllPaymentsByAdmin(@PathVariable Integer provId) {
		return ResponseEntity.ok(this.paymentService.getPaymentByProvider(provId));

	}

}
