package com.laundry.washer.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customer_id;
	private String customer_name;
	
	private String customer_emailid;
//	@Size(min = 10,max = 10)
	private String customer_number;
	

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	private String customer_address;
	private String customer_password;

	 //@OneToMany(mappedBy = "customer")
	//  private List<Payment> pay;
//	  
//	  
//	 @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
//	  private List<Order> order=  new ArrayList<>();

	 
	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getCustomer_emailid() {
		return customer_emailid;
	}

	public void setCustomer_emailid(String customer_emailid) {
		this.customer_emailid = customer_emailid;
	}

	public  String getCustomer_number() {
		return customer_number;
	}

	public void setCustomer_number( String customer_number) {
		this.customer_number = customer_number;
	}

	public String getCustomer_address() {
		return customer_address;
	}

	public void setCustomer_address(String customer_address) {
		this.customer_address = customer_address;
	}

	public String getCustomer_password() {
		return customer_password;
	}

	public void setCustomer_password(String customer_password) {
		this.customer_password = customer_password;
	}

//	public Customer(int customer_id, String customer_name, @UniqueElements String customer_emailid,
//			@Size(min = 10, max = 10) String customer_number, String customer_address, String customer_password,
//			List<Payment> pay) {
//		super();
//		this.customer_id = customer_id;
//		this.customer_name = customer_name;
//		this.customer_emailid = customer_emailid;
//		this.customer_number = customer_number;
//		this.customer_address = customer_address;
//		this.customer_password = customer_password;
//		this.pay = pay;
//	}
	

//	public List<Payment> getPayment() {
//		return payment;
//	}
//
//	public void setPayment(List<Payment> payment) {
//		this.payment = payment;
//	}
//
//	public List<Order> getOrder() {
//		return order;
//	}
//
//	public void setOrder(List<Order> order) {
//		this.order = order;
//	}

}
