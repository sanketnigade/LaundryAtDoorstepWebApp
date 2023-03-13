package com.laundry.washer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.laundry.washer.model.Customer;
import com.laundry.washer.model.Payment;
import com.laundry.washer.model.ProviderRegistration;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

	@Query("select payment from Payment payment where payment.customer=?1")
	List<Payment> findPaymentByCustomer(Customer customer);
	
	@Query("select payment from Payment payment where payment.proReg=?1")
	List<Payment> findPaymentByCustomer(ProviderRegistration provider);
}
