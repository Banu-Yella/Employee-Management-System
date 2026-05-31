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

import com.emp.manag.user.entity.UserAssessmentEntity;
import com.emp.manag.user.service.UserAssessmentService;

@RestController
@RequestMapping("/api/employee-management")
public class UserAssessmentController {
	
	@Autowired
	public UserAssessmentService userassessmentService;
	
	@PostMapping("/saveuserassessment")
	public String saveUserAssessment(@RequestBody UserAssessmentEntity userAssessment) {
		return "User Assessment saved successfully.";
	}
	
	@PutMapping("/updateuserassessment/{userAssessmentId}")
	public String updateUserAssessment(@PathVariable Integer userAssessmentId, @RequestBody UserAssessmentEntity updatedUserAssessment) {
		return userassessmentService.updateAssesment(userAssessmentId, updatedUserAssessment);
	}
	
	@GetMapping("/getuserassessment/{userAssessmentId}")
	public UserAssessmentEntity getUserAssessmentById(@PathVariable Integer userAssessmentId) {
		return userassessmentService.getUserAssessmentById(userAssessmentId);
	}
	
	@GetMapping("/getalluserassessments")
	public List<UserAssessmentEntity> getAllUserAssessments() {
		return userassessmentService.getAllUserAssessments();
	}
	
	@DeleteMapping("/deleteuserassessmentbyid/{userAssessmentId}")
	public String deleteUserAssessmentById(@PathVariable Integer userAssessmentId) {
		userassessmentService.deleteUserAssessmentById(userAssessmentId);
		return "User Assessment record with ID " + userAssessmentId + " has been deleted.";
	}
	
	@DeleteMapping("/deletealluserassessments")
	public String deleteAllUserAssessments() {
		userassessmentService.deleteAllUserAssessments();
		return "All User Assessment records have been deleted.";
	}

}
