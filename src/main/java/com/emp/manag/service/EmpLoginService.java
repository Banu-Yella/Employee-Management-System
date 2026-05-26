package com.emp.manag.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emp.manag.emp.repo.EmpLoginRepo;
import com.emp.manag.emp.repo.EmpRepo;
import com.emp.manag.entity.EmpEntity;
import com.emp.manag.entity.EmpLoginEntity;

@Service
@Transactional(rollbackFor = Exception.class)
public class EmpLoginService {

	@Autowired
	private EmpLoginRepo loginRepo;
	
	@Autowired
	private EmpRepo empRepo;
	
	public EmpLoginEntity saveLogin(EmpLoginEntity Login) {
		
		Integer empId = Login.getEmployee().getEmployeeid();
		
		EmpEntity emp = empRepo.findById(empId).orElseThrow();
		
		Login.setEmployee(emp);
		
		return loginRepo.save(Login);
	}
	
	public String updateLogin(Integer loginId, EmpLoginEntity updatedLogin) {
		EmpLoginEntity existLogin = loginRepo.findById(loginId)
				.orElseThrow(() -> new RuntimeException("Login not found"));
		
		Integer empId = updatedLogin.getEmployee().getEmployeeid();
		
		EmpEntity emp = empRepo.findById(empId).orElseThrow();
		
		existLogin.setEmployee(emp);
		existLogin.setUsername(updatedLogin.getUsername());
		existLogin.setPasswordHash(updatedLogin.getPasswordHash());
		existLogin.setRole(updatedLogin.getRole());
		existLogin.setStatus(updatedLogin.getStatus());
				
		loginRepo.save(existLogin);
		return "Record updated successfully";
	}
	
	public EmpLoginEntity getLoginById(Integer loginId) {
		return loginRepo.findById(loginId)
				.orElseThrow(() -> new RuntimeException("Login not found"));
		
	}
	
	public EmpLoginEntity getLoginByUsername(String username) {
		return loginRepo.findByUsername(username)
				.orElseThrow(() -> new RuntimeException("Login not found"));
		
	}
	
	public String deleteLogin(Integer loginId) {
		
		if (!loginRepo.existsById(loginId)) {
			throw new RuntimeException("Login not found");
		}
		
		loginRepo.deleteById(loginId);
		return "Record deleted successfully";
		
	}
	
	public String deleteAllEmployees() {
		loginRepo.deleteAll();
		return "All employee records deleted successfully";
	}
	
	public List<EmpLoginEntity> getAllEmployees() {
		return loginRepo.findAll();
	}

	
	
}
