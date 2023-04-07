package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name = "users")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id;

	@Column(name = "name")
	private String name;

	@Column(name = "dob")
	private String dob;
	
	@Column(name = "mobile")
	private String mobile;

	@Column(name = "address")
	private String address;

	@Column(name = "password")
	private String password;

	public Users() {

	}

	public Users(long id, String name, String dob, String mobile, String address, String password) {
		super();
		Id = id;
		this.name = name;
		this.dob = dob;
		this.mobile = mobile;
		this.address = address;
		this.password = password;
	}

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String full_name) {
		this.name = full_name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
}
