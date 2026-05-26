package com.emp.manag.user.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.emp.manag.jobboard.entity.AssessmentEntity;
import com.emp.manag.jobboard.entity.JobApplicationEntity;
import com.emp.manag.jobboard.entity.JobApplicationEntity.CandidateStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "user_assessment")
public class UserAssessmentEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_assessment_id")
	private Integer userAssessmentId;

	@Column(name = "score")
    private Integer score;

	@Column(name = "passed")
    private Boolean passed;

    @Enumerated(EnumType.STRING)
    private CandidateStatus status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "assessment_id")
    private AssessmentEntity assessment;

    @ManyToOne
    @JoinColumn(name = "job_application_id")
    private JobApplicationEntity jobApplication;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updateAt;

}
