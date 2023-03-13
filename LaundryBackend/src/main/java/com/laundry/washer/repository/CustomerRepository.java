package com.laundry.washer.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.laundry.washer.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	@Query("select customer from Customer customer where customer.customer_emailid=?1")
	Customer findUserByEmailIdAndPassword(String email, String password);
}
