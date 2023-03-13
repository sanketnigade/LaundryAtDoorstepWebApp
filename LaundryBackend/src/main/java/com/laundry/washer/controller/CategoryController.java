package com.laundry.washer.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.laundry.washer.dto.ApiResponse;
import com.laundry.washer.model.Category;
import com.laundry.washer.service.CategoryService;


@RestController
@RequestMapping(value={"/bookorder","/setPrice"})
@CrossOrigin("*")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	

	@PostMapping("/provider/{providerId}/addcategory")
	public HttpStatus createCategory(@Valid @RequestBody Category category,@PathVariable Integer providerId) {
		      categoryService.createCategory(category, providerId);
		return HttpStatus.CREATED;

	}

	@PutMapping("/{categoryId}")
	public ResponseEntity<Category> updateCategory(@Valid @RequestBody Category category,
			@PathVariable Integer categoryId) {
		Category updatedCategory = this.categoryService.updateCategory(category, categoryId);
		return ResponseEntity.ok(updatedCategory);

	}

	@DeleteMapping("/{categoryId}")
	public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Integer categoryId) {
		this.categoryService.deleteCategory(categoryId);
		return new ResponseEntity(new ApiResponse("Category Deleted Successfully",true), HttpStatus.OK);

	}

	@GetMapping("/Categories")
	public ResponseEntity<List<Category>> getAllCategories() {
		List<Category> categories= this.categoryService.getAllCategory();
		return new ResponseEntity<List<Category>>(categories,HttpStatus.OK);

	}

	@GetMapping("/category/{categoryId}")
	public ResponseEntity<Category> getCategoryById(@PathVariable Integer categoryId) {
		Category category= this.categoryService.getCategoryById(categoryId);
		return new ResponseEntity<Category>(category,HttpStatus.OK);
		

	}

//	@GetMapping("/provider/{providerId}/categories")
//	public ResponseEntity<List<Category>> getCategoryByProvider(@PathVariable Integer providerId){
//		List<Category> cats= this.categoryService.getCategoryByProvider(providerId);
//		return new ResponseEntity<List<Category>>(cats,HttpStatus.OK);
//	}
}
