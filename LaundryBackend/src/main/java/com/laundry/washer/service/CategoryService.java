package com.laundry.washer.service;

import java.util.List;

import com.laundry.washer.model.Category;


public interface CategoryService {

	void createCategory( Category category, Integer providerId);

	Category updateCategory(Category category, Integer categoryId);

	Category getCategoryById(Integer categoryId);

	List<Category> getAllCategory();

	void deleteCategory(Integer categoryId);
	
	//List<Category> getCategoryByProvider(Integer providerId);
}
