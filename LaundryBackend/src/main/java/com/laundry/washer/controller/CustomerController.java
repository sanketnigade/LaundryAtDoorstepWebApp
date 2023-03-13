package com.laundry.washer.controller;

import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.laundry.washer.dto.ApiResponse;
import com.laundry.washer.model.Customer;
import com.laundry.washer.service.CustomerService;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	

	@PostMapping("/customersignup")
	public int createCustomer(@Valid @RequestBody Customer customer) {
		int i=customerService.createCustomer(customer);
		return i;

	}
	
	@PostMapping("/customerlogin")
	public int login(@RequestParam("Email") String userEmail, @RequestParam("Pwd") String password) {
		   Customer user = customerService.validateCustomer(userEmail, password);
		if (user == null) {
			return 0;
		}
//		session.setAttribute("currentUser", user);
		return user.getCustomer_id();
	}
	@GetMapping("/home")
	public String showHome(Customer cust, Model model) {
		model.addAttribute("Customer", cust);
		return "home";
	}
//
//	@PutMapping("/{customerId}")
//	public ResponseEntity<CustomerDto> updateCustomer(@Valid @RequestBody CustomerDto customerDto,
//			@PathVariable Integer customerId) {
//		CustomerDto updatedCustomer = this.customerService.updateCustomer(customerDto, customerId);
//		return ResponseEntity.ok(updatedCustomer);
//
//	}

	@DeleteMapping("/{customerId}")
	public ResponseEntity<ApiResponse> deleteCustomer(@PathVariable Integer customerId) {
		this.customerService.deleteCustomer(customerId);
		return new ResponseEntity(new ApiResponse("Customer Deleted Successfully",true), HttpStatus.OK);

	}

	@GetMapping("/")
	public ResponseEntity<List<Customer>> getAllCustomers() {
		return ResponseEntity.ok(this.customerService.getAllCustomer());

	}

	@GetMapping("/{customerId}")
	public ResponseEntity<Customer> getSingleCustomer(@PathVariable Integer customerId) {
		return ResponseEntity.ok(this.customerService.getCustomerById(customerId));

	}
}
