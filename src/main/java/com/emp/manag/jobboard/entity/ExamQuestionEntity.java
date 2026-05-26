package com.emp.manag.jobboard.entity;

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
@Table(name = "exam_question")
public class ExamQuestionEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_id")
	private Integer questionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exam_id")
    private ExamEntity exam;

    @Column(name = "question_type", columnDefinition = "TEXT")
	private String questionType;
    
    @Column(name = "question", columnDefinition = "TEXT")
    private String question;
    
	@Column(name = "answer", columnDefinition = "TEXT")
	private String answer;
	
	@Column(name = "correct_answer", columnDefinition = "TEXT")
    private String correctAnswer;

	    
}
