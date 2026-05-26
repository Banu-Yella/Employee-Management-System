package com.emp.manag.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "tax_slab")
public class TaxSlabEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "employee_id", nullable = false)
	private EmpEntity employee;

	@Column(name = "min_amount")
	private BigDecimal minAmount;

	@Column(name = "max_amount")
	private BigDecimal maxAmount;

	@Column(name = "percentage")
	private BigDecimal percentage;
	
	@Column(name= "created_at")
	private LocalDateTime createdAt;
	
	@Column(name= "updated_at")
	private LocalDateTime updatedAt;

}
