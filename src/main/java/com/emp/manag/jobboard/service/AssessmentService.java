package com.emp.manag.jobboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emp.manag.jobboard.entity.AssessmentEntity;
import com.emp.manag.jobboard.entity.JobBoardEntity;
import com.emp.manag.jobboard.repo.AssessmentRepo;
import com.emp.manag.jobboard.repo.JobBoardRepo;
import com.emp.manag.user.entity.UserAssessmentEntity;
import com.emp.manag.user.entity.UserEntity;
import com.emp.manag.user.repo.UserAssessmentRepo;
import com.emp.manag.user.repo.UserRepo;

@Service
@Transactional(rollbackFor = Exception.class)
public class AssessmentService {

	@Autowired
	private AssessmentRepo assessmentRepository;

	@Autowired
	private JobBoardRepo jobBoardRepo;

	@Autowired
	private UserAssessmentRepo userAssessmentRepo;

	@Autowired
	private UserRepo userRepo;

	public AssessmentEntity save(AssessmentEntity assessment) {

		validateAssessment(assessment);

		Integer jobId = assessment.getJob().getJobId();
		Integer userId = assessment.getUser().getUserId();
		Integer userAssessmentId = assessment.getUserAssessment().getUserAssessmentId();

		assessment.setJob(jobBoardRepo.findById(jobId)
				.orElseThrow(() -> new RuntimeException("Job not found with id: " + jobId)));

		UserEntity user = userRepo.findById(userId)
				.orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
		UserAssessmentEntity userAssessment = userAssessmentRepo.findById(userAssessmentId)
				.orElseThrow(() -> new RuntimeException("User Assessment not found with id: " + userAssessmentId));
		JobBoardEntity job = jobBoardRepo.findById(jobId)
				.orElseThrow(() -> new RuntimeException("Job not found with id: " + jobId));

		assessment.setUser(user);
		assessment.setUserAssessment(userAssessment);
		assessment.setJob(job);

		return assessmentRepository.save(assessment);
	}

	public String updateAssessment(Integer assessmentId, AssessmentEntity updatedassessment) {

		validateAssessment(updatedassessment);

		if (assessmentId == null) {
			throw new RuntimeException("Assessment ID is required for update");
		}

		if (updatedassessment == null) {
			throw new RuntimeException("Assessment details are required for update");
		}

		AssessmentEntity existingAssessment = assessmentRepository.findById(assessmentId)
				.orElseThrow(() -> new RuntimeException("Assessment not found with id: " + assessmentId));

		existingAssessment.setFeedback(updatedassessment.getFeedback());
		existingAssessment.setJob(updatedassessment.getJob());
		existingAssessment.setUser(updatedassessment.getUser());
		existingAssessment.setAssessmentResult(updatedassessment.getAssessmentResult());

		assessmentRepository.save(updatedassessment);
		return "Updated Successfully";
	}

	public AssessmentEntity getAssessmentById(Integer assessmentId) {

	    return assessmentRepository.findById(assessmentId)
	            .orElseThrow(() -> new RuntimeException("Assessment not found with id: " + assessmentId));
	}

	public String deleteAssessment(Integer assessmentId) {

		if (assessmentId == null) {
			throw new RuntimeException("Assessment ID is required for deletion");
		}

		AssessmentEntity existingAssessment = assessmentRepository.findById(assessmentId)
				.orElseThrow(() -> new RuntimeException("Assessment not found with id: " + assessmentId));

		assessmentRepository.delete(existingAssessment);

		return "Record deleted successfully";
	}

	public List<AssessmentEntity> getAllAssessments() {

		return assessmentRepository.findAll();
	}
	
	public void validateAssessment(AssessmentEntity assessment) {
		if (assessment == null) {
			throw new RuntimeException("Assessment details are required");
		}
		if (assessment.getTotalScore() == null) {
			throw new RuntimeException("Total Score is required");
		}
		if (assessment.getFeedback() == null || assessment.getFeedback().isEmpty()) {
			throw new RuntimeException("Feedback is required");
		}
		if (assessment.getJob() == null || assessment.getJob().getJobId() == null) {
			throw new RuntimeException("Valid Job is required");
		}
		if (assessment.getUser() == null || assessment.getUser().getUserId() == null) {
			throw new RuntimeException("Valid User is required");
		}
		if (assessment.getUserAssessment() == null || assessment.getUserAssessment().getUserAssessmentId() == null) {
			throw new RuntimeException("Valid User Assessment is required");
		}
	}
	
	public String deleteAllAssessments() {
	    assessmentRepository.deleteAll();
	    return "All assessments deleted successfully";
	}
	
	public Integer calculateTotalScore(AssessmentEntity assessment) {
		// Implement your scoring logic here based on the assessment details
		// For example, you can sum up scores from different criteria
		
		 		
		Integer totalScore = 0;
		// Add your scoring logic to calculate totalScore based on assessment details
		return totalScore;
	}
	

}
