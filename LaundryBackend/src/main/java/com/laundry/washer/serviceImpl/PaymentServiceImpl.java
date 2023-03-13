package com.laundry.washer.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.laundry.washer.exception.ResourceNotFoundException;
import com.laundry.washer.model.Customer;
import com.laundry.washer.model.Payment;
import com.laundry.washer.model.ProviderRegistration;
import com.laundry.washer.repository.CustomerRepository;
import com.laundry.washer.repository.PaymentRepository;
import com.laundry.washer.repository.ProviderRegistrationRepository;
import com.laundry.washer.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentRepository paymentRepo;
	@Autowired
	private CustomerRepository customerRepo;
	@Autowired
	private ProviderRegistrationRepository providerRepo;
	

	@Override
	public void createPayment(Integer providerId,Integer customerId,double amount,String paymentMode) {
		Customer customer = this.customerRepo.findById(customerId)
			.orElseThrow(() -> new ResourceNotFoundException("Customer", "customer_id", customerId));
	
		ProviderRegistration prov = this.providerRepo.findById(providerId)
				.orElseThrow(() -> new ResourceNotFoundException("ProviderRegistration", "providerRegistration_id", providerId));
		
		Payment payment = new Payment(amount,paymentMode);
		payment.setCustomer(customer);
		payment.setProReg(prov);
		paymentRepo.save(payment);
		
	}


	@Override
	public List<Payment> getPaymentByCustomer(Integer customerId) {
		  Customer cust=this.customerRepo.findById(customerId).orElseThrow(()-> new ResourceNotFoundException("Customer","customer_id",customerId));
			
			List<Payment> payments =this.paymentRepo.findPaymentByCustomer(cust);
			return payments;
		
	}


	@Override
	public List<Payment> getPaymentByProvider(Integer ProviderId) {
		ProviderRegistration prov=this.providerRepo.findById(ProviderId).orElseThrow(()-> new ResourceNotFoundException("ProviderRegistration","provider_id",ProviderId));
		
		List<Payment> payments =this.paymentRepo.findPaymentByCustomer(prov);
		return payments;
	}

	
}
