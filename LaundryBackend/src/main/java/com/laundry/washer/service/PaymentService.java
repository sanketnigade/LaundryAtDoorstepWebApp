package com.laundry.washer.service;

import java.util.List;

import com.laundry.washer.model.Payment;

public interface PaymentService {

	void createPayment(Integer providerId,Integer customerId,double amount, String paymentMode);
	
	List<Payment> getPaymentByCustomer(Integer customerId);
	List<Payment> getPaymentByProvider(Integer ProviderId);

}
