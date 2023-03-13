package com.laundry.washer.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
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
import com.laundry.washer.model.ProviderRegistration;
import com.laundry.washer.service.ProviderRegistrationService;

@RestController
@RequestMapping(value={"/ad","/order"})
@CrossOrigin("*")
public class ProviderRegistrationController {
	@Autowired
	private ProviderRegistrationService providerServices;
	
	@PostMapping("/adminsignup")
	public int createProviderRegistration(@RequestBody ProviderRegistration providerDto){
		int i=providerServices.createProviderRegistration(providerDto);
		return i;
	}
	
	@PostMapping("/adminlogin")
	public int login(@RequestParam("Email") String Email, @RequestParam("Pwd") String password,
			HttpSession session) {
		   ProviderRegistration provider = providerServices.validateProvider(Email, password);
		if (provider == null) {
			return 0;
		}
		session.setAttribute("currentProvider", provider);
		return provider.getProviderRegistration_id();
	}
	
	@GetMapping("/home")
	public String showHome(ProviderRegistration pro, Model model) {
		model.addAttribute("ProviderRegistration", pro);
		return "home";
	}
	
//	@GetMapping("/{providerId}")
//	public ResponseEntity<ProviderRegistrationDto> upadateProvider(@Valid @RequestBody ProviderRegistrationDto providerDto,
//			@PathVariable Integer providerId) {
//		ProviderRegistrationDto updatedProvider = this.providerServices.updateProviderRegistration(providerDto, providerId);
//		return ResponseEntity.ok(updatedProvider);
//
//	}

	@DeleteMapping("/{providerId}")
	public ResponseEntity<ApiResponse> deleteCustomer(@PathVariable Integer providerId) {
		this.providerServices.deleteProviderRegistration(providerId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Provider Deleted Successfully",true), HttpStatus.OK);

	}

	@GetMapping("/getAll")
	public ResponseEntity<List<ProviderRegistration>> getAllCustomers() {
		return ResponseEntity.ok(this.providerServices.getAllProviderRegistration());

	}

//	@GetMapping("/{email}")
//	public ResponseEntity<ProviderRegistration> getProviderbyEmail(@PathVariable String email) {
//		return ResponseEntity.ok(this.providerServices.getProviderRegistrationByEmail(email));
//
//	}
}
