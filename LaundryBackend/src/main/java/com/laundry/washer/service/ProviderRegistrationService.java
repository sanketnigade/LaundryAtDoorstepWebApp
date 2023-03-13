package com.laundry.washer.service;

import java.util.List;

import com.laundry.washer.model.ProviderRegistration;


public interface ProviderRegistrationService {
	int createProviderRegistration(ProviderRegistration provider);
	
	//ProviderRegistration updateProviderRegistration(ProviderRegistration provider,Integer providerId);
	
	//ProviderRegistration getProviderRegistrationByEmail(String ProviderEmail);
	
	List<ProviderRegistration> getAllProviderRegistration();
	
	ProviderRegistration validateProvider(String emailId, String password);
	
	void deleteProviderRegistration(Integer providerId);
}
