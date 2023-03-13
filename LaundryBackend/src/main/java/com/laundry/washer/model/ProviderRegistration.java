package com.laundry.washer.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class ProviderRegistration {

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int providerRegistration_id;
	 private String providerRegistration_name; 
     private String providerRegistration_emailID;
     private String providerRegistration_number;
     private String providerRegistration_address;
     private String password;
     private String description;
	  
//	  @OneToOne(mappedBy = "pro")
//	  private Category cat;
	 
	  
     
     
	public ProviderRegistration() {
		
	}


	public ProviderRegistration(int providerRegistration_id, String providerRegistration_name,
			String providerRegistration_emailID, String providerRegistration_number, String providerRegistration_address,
			String password, String description,Category cat) {
		super();
		this.providerRegistration_id = providerRegistration_id;
		this.providerRegistration_name = providerRegistration_name;
		this.providerRegistration_emailID = providerRegistration_emailID;
		this.providerRegistration_number = providerRegistration_number;
		this.providerRegistration_address = providerRegistration_address;
		this.password = password;
		this.description = description;
		//this.cat = cat;
		
		
	}


	public int getProviderRegistration_id() {
		return providerRegistration_id;
	}


	public void setProviderRegistration_id(int providerRegistration_id) {
		this.providerRegistration_id = providerRegistration_id;
	}


	public String getProviderRegistration_name() {
		return providerRegistration_name;
	}


	public void setProviderRegistration_name(String providerRegistration_name) {
		this.providerRegistration_name = providerRegistration_name;
	}


	public String getProviderRegistration_emailID() {
		return providerRegistration_emailID;
	}


	public void setProviderRegistration_emailID(String providerRegistration_emailID) {
		this.providerRegistration_emailID = providerRegistration_emailID;
	}


	public String getProviderRegistration_number() {
		return providerRegistration_number;
	}


	public void setProviderRegistration_number(String providerRegistration_number) {
		this.providerRegistration_number = providerRegistration_number;
	}


	public String getProviderRegistration_address() {
		return providerRegistration_address;
	}


	public void setProviderRegistration_address(String providerRegistration_address) {
		this.providerRegistration_address = providerRegistration_address;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


//	public Category getCategory() {
//		return cat;
//	}
//
//
//	public void setCategory(Category cat) {
//		this.cat = cat;
//	}



	


	
}
