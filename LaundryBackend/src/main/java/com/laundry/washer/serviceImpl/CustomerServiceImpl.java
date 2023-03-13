package com.laundry.washer.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.laundry.washer.exception.ResourceNotFoundException;
import com.laundry.washer.model.Customer;
import com.laundry.washer.repository.CustomerRepository;
import com.laundry.washer.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepo;
	

	@Override
	public int createCustomer(Customer customer) {
		Customer i=customerRepo.save(customer);
		return i.getCustomer_id();
	}
	
	@Override
	public Customer validateCustomer(String emailId, String password) {
	    Customer customer = customerRepo.findUserByEmailIdAndPassword(emailId, password);
		return customer;
	}


	@Override
	public Customer getCustomerById(Integer customerId) {

		Customer customer = this.customerRepo.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "customer_id", customerId));

		return customer;
	}

	@Override
	public List<Customer> getAllCustomer() {

		List<Customer> customers = this.customerRepo.findAll();
		

		return customers;
	}

	@Override
	public void deleteCustomer(Integer customerId) {
		Customer customer = this.customerRepo.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "customer_id", customerId));
		customerRepo.delete(customer);
	}


}
