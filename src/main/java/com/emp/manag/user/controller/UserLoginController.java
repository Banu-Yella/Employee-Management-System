package com.emp.manag.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.manag.user.entity.UserLoginEntity;
import com.emp.manag.user.service.UserLoginService;

@RestController
@RequestMapping("/api/employee-management")
public class UserLoginController {
	
	@Autowired
	private UserLoginService loginService;

	@PostMapping("/savelogindetails")
	public UserLoginEntity saveLoginDetails(UserLoginEntity loginEntity) {
		return loginService.saveLogin(loginEntity);
	}
	
	@PutMapping("/updatelogindetails/{loginId}")
	public String updateLoginDetails(@PathVariable Integer loginId, @RequestBody UserLoginEntity updatedLogin) {
		return loginService.updateLogin(loginId, updatedLogin);
	}
	
	@PostMapping("/deletelogindetails/{loginId}")
	public String deleteLoginById(@PathVariable Integer loginId) {
		return loginService.deleteLogin(loginId);
	}
	
	@GetMapping("/getlogindetails/{loginId}")
	public UserLoginEntity getLoginDetails(@PathVariable Integer loginId) {
		return loginService.getLoginById(loginId);
	}
	
	@GetMapping("/getalllogindetails")
	public List<UserLoginEntity> getAllLoginDetails() {
		return loginService.getAllLogins();
	}
	
	@DeleteMapping("/deletealllogindetails")
	public String deleteAllLoginDetails() {
		return loginService.deleteAllLogins();
	}
	
}
