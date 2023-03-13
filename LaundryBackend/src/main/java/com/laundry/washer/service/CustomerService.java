package com.laundry.washer.service;

import java.util.List;

import com.laundry.washer.model.Customer;

public interface CustomerService {

	int createCustomer(Customer customer);

	//void updateCustomer(Customer customer, Integer customerId);

	Customer getCustomerById(Integer customerId);

	List<Customer> getAllCustomer();

	void deleteCustomer(Integer customerId);
	
	Customer validateCustomer(String emailId, String password);

}
