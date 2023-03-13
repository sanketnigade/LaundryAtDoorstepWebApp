package com.laundry.washer.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Category {
	    @Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
	  
		private int category_id;
		private float shirt;
		private float suit;
		private float blazer;
		private float tShirt;
		private float pants;
		private float trousers;
		private float jeans;
		private float saree;
		private float kurta;
		private float topAndTee;
		private float gown;
		private float miniDress;
		private float shorts;
		//pro_providerRegistration_id
		@OneToOne(cascade = CascadeType.ALL)
		@JoinColumn(name = "pro_id")
		private ProviderRegistration pro;
		
		
		
		

		public int getCategory_id() {
			return category_id;
		}
		public void setCategory_id(int category_id) {
			this.category_id = category_id;
		}
		public ProviderRegistration getProviderRegistration() {
			return pro;
		}
		public void setProviderRegistration(ProviderRegistration pro) {
			this.pro = pro;
		}
	
		public float getShirt() {
			return shirt;
		}
		public void setShirt(float shirt) {
			this.shirt = shirt;
		}
		public float getSuit() {
			return suit;
		}
		public void setSuit(float suit) {
			this.suit = suit;
		}
		public float getBlazer() {
			return blazer;
		}
		public void setBlazer(float blazer) {
			this.blazer = blazer;
		}
		public float gettShirt() {
			return tShirt;
		}
		public void settShirt(float tShirt) {
			this.tShirt = tShirt;
		}
		public float getPants() {
			return pants;
		}
		public void setPants(float pants) {
			this.pants = pants;
		}
		public float getTrousers() {
			return trousers;
		}
		public void setTrousers(float trousers) {
			this.trousers = trousers;
		}
		public float getJeans() {
			return jeans;
		}
		public void setJeans(float jeans) {
			this.jeans = jeans;
		}
		public float getSaree() {
			return saree;
		}
		public void setSaree(float saree) {
			this.saree = saree;
		}
		public float getKurta() {
			return kurta;
		}
		public void setKurta(float kurta) {
			this.kurta = kurta;
		}
		public float getTopAndTee() {
			return topAndTee;
		}
		public void setTopAndTee(float topAndTee) {
			this.topAndTee = topAndTee;
		}
		public float getGown() {
			return gown;
		}
		public void setGown(float gown) {
			this.gown = gown;
		}
		public float getMiniDress() {
			return miniDress;
		}
		public void setMiniDress(float miniDress) {
			this.miniDress = miniDress;
		}
		public float getShorts() {
			return shorts;
		}
		public void setShorts(float shorts) {
			this.shorts = shorts;
		}
		
		
		public Category() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Category(int category_id, float shirt, float suit, float blazer, float tShirt, float pants,
				float trousers, float jeans, float saree, float kurta, float topAndTee, float gown,
				float miniDress, float shorts, ProviderRegistration providerRegistration) {
			super();
			this.category_id = category_id;
			this.shirt = shirt;
			this.suit = suit;
			this.blazer = blazer;
			this.tShirt = tShirt;
			this.pants = pants;
			this.trousers = trousers;
			this.jeans = jeans;
			this.saree = saree;
			this.kurta = kurta;
			this.topAndTee = topAndTee;
			this.gown = gown;
			this.miniDress = miniDress;
			this.shorts = shorts;
			this.pro = providerRegistration;
	
		}
		
		
		
}
