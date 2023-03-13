package com.laundry.washer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.laundry.washer.model.Category;
import com.laundry.washer.model.ProviderRegistration;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

	//@Query("select category from Category category where category.providerRegistration_id=?1")
	//List<Category> findCategoryByProvider(ProviderRegistration provider);
}
