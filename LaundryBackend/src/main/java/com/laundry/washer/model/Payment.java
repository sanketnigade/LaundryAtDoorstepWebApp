package com.laundry.washer.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int payment_id;
	private String paymentMode ;
	private double amount;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cust_id")
	private Customer customer;
	
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "provider_id")
	private ProviderRegistration proReg;
	
	public Payment() {
		super();
	}

	public Payment( String paymentMode, double amount, Customer customer, ProviderRegistration proReg) {
		super();
		this.paymentMode = paymentMode;
		this.amount = amount;
		this.customer = customer;
		this.proReg = proReg;
	}
	public Payment(  double amount,String paymentMode) {
		super();
		this.paymentMode = paymentMode;
		this.amount = amount;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public ProviderRegistration getProReg() {
		return proReg;
	}

	public void setProReg(ProviderRegistration proReg) {
		this.proReg = proReg;
	}



}
