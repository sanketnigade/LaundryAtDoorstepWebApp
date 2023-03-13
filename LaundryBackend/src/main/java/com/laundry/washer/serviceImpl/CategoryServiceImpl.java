package com.laundry.washer.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.laundry.washer.exception.ResourceNotFoundException;
import com.laundry.washer.model.Category;
import com.laundry.washer.model.Customer;
import com.laundry.washer.model.ProviderRegistration;
import com.laundry.washer.repository.CategoryRepository;
import com.laundry.washer.repository.ProviderRegistrationRepository;
import com.laundry.washer.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepo;
	
	
	@Autowired
	private ProviderRegistrationRepository providerRepo;

	@Override
	public  void createCategory(Category category,Integer providerId) {
		categoryRepo.save(category);
		
	}



	@Override
	public Category getCategoryById(Integer categoryId) {

		Category category = this.categoryRepo.findById(categoryId)
				.orElseThrow(() -> new ResourceNotFoundException("Category", "category_id", categoryId));

		return category;
	}

	@Override
	public List<Category> getAllCategory() {

		List<Category> categories = this.categoryRepo.findAll();
		
		return categories;
	}

	@Override
	public void deleteCategory(Integer categoryId) {
		Category category = this.categoryRepo.findById(categoryId)
				.orElseThrow(() -> new ResourceNotFoundException("Category", "category_id", categoryId));
		      categoryRepo.delete(category);
	}



	@Override
	public Category updateCategory(Category category, Integer categoryId) {
		
		Category category1 = this.categoryRepo.findById(categoryId)
					.orElseThrow(() -> new ResourceNotFoundException("Category", "category_id", categoryId));

		category1.setBlazer(category.getBlazer());
		category1.setGown(category.getGown());
		category1.setJeans(category.getJeans());
		category1.setKurta(category.getKurta());
		category1.setMiniDress(category.getMiniDress());
		category1.setPants(category.getPants());
		category1.setSaree(category.getSaree());
		category1.setShirt(category.getShirt());
		category1.setShorts(category.getShorts());
		category1.setSuit(category.getSuit());
		category1.setTopAndTee(category.getTopAndTee());
		category1.setTrousers(category.getTrousers());

		Category updateCategory = this.categoryRepo.save(category1);
			return updateCategory;
	}


}
