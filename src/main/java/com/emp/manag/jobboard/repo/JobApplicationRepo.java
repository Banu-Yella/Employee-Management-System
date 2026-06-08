package com.emp.manag.jobboard.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emp.manag.jobboard.entity.JobApplicationEntity;
import com.emp.manag.jobboard.entity.JobApplicationEntity.CandidateStatus;

@Repository
public interface JobApplicationRepo extends JpaRepository<JobApplicationEntity, Integer> {

	 boolean existsByUserUserIdAndJobBoardJobId(
	            Integer userId,
	            Integer jobId);

	    Optional<JobApplicationEntity> findByUserUserIdAndJobBoardJobId(
	            Integer userId,
	            Integer jobId);

	    List<JobApplicationEntity> findByUserUserId(
	            Integer userId);

	    List<JobApplicationEntity> findByJobBoardJobId(
	            Integer jobId);

	    List<JobApplicationEntity> findByStatus(
	            CandidateStatus status);
}
