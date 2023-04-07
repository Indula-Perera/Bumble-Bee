package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id;

	@Column(name = "name")
	private String name;

	@Column(name = "address")
	private String address;

	@Column(name = "mobile")
	private String mobile;

	@Column(name = "note")
	private String note;

	@Column(name = "dividedAmount")
	private String dividedAmount;

	@Column(name = "total")
	private String total;

	public Payment(long id, String name, String address, String mobile, String note, String dividedAmount,
			String total) {
		super();
		Id = id;
		this.name = name;
		this.address = address;
		this.mobile = mobile;
		this.note = note;
		this.dividedAmount = dividedAmount;
		this.total = total;
	}

	public Payment() {

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

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getDividedAmount() {
		return dividedAmount;
	}

	public void setDividedAmount(String dividedAmount) {
		this.dividedAmount = dividedAmount;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

}
