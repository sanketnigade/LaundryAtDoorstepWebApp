package com.laundry.washer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.laundry.washer.model.ProviderRegistration;

@Repository
public interface ProviderRegistrationRepository extends JpaRepository<ProviderRegistration, Integer> {

	@Query("select providerregistration  from ProviderRegistration providerregistration where providerregistration.providerRegistration_emailID=?1")
	ProviderRegistration findProviderByEmailAndPassword(String email, String password);

	//@Query("select * from ProviderRegistration where providerRegistration_emailID=?")
	//ProviderRegistration findProviderByEmail(String email);
}
