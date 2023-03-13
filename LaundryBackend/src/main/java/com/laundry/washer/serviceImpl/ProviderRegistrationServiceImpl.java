package com.laundry.washer.serviceImpl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.laundry.washer.exception.ResourceNotFoundException;
import com.laundry.washer.model.ProviderRegistration;
import com.laundry.washer.repository.ProviderRegistrationRepository;
import com.laundry.washer.service.ProviderRegistrationService;

@Service
public class ProviderRegistrationServiceImpl implements ProviderRegistrationService {

	@Autowired
	private ProviderRegistrationRepository providerRegistrationRepo;

	@Override
	public int createProviderRegistration(ProviderRegistration provider) {
		ProviderRegistration i=providerRegistrationRepo.save(provider);
		return i.getProviderRegistration_id();
	}

	@Override
	public ProviderRegistration validateProvider(String emailId, String password) {
		ProviderRegistration provider= providerRegistrationRepo.findProviderByEmailAndPassword(emailId, password);
		return provider;
	}


	
//	@Override
//	public ProviderRegistration getProviderRegistrationByEmail(String ProviderEmail) {
//		ProviderRegistration provider = this.providerRegistrationRepo.findProviderByEmail(ProviderEmail);
//
//		return provider;
//	}
	

	@Override
	public List<ProviderRegistration> getAllProviderRegistration() {
		
		List<ProviderRegistration> providers = this.providerRegistrationRepo.findAll();
		
		return providers;
	}

	@Override
	public void deleteProviderRegistration(Integer providerId) {
	
		ProviderRegistration provider = this.providerRegistrationRepo.findById(providerId)
				.orElseThrow(() -> new ResourceNotFoundException("Provider", "provider_id", providerId));
		     providerRegistrationRepo.delete(provider);
		
	}
	


}
