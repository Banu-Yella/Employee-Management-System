package com.emp.manag.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emp.manag.emp.repo.AttendanceRepo;
import com.emp.manag.emp.repo.EmpRepo;
import com.emp.manag.entity.AttendanceEntity;
import com.emp.manag.entity.EmpEntity;


@Service
@Transactional(rollbackFor = Exception.class)
public class AttendanceService {
	
	@Autowired
	private AttendanceRepo Repo2;

	@Autowired
	private EmpRepo empRepo1;

	public AttendanceEntity saveAttendance(AttendanceEntity attendance) {
		
		Integer empId = attendance.getEmployee().getEmployeeid();
		
		EmpEntity emp = empRepo1.findById(empId).orElseThrow();
		
		attendance.setEmployee(emp);
		
		return Repo2.save(attendance);
	}
	
	public String updateAttendance(Integer id, AttendanceEntity updatedAttendance) {
		AttendanceEntity existAtt = Repo2.findById(id)
				.orElseThrow(() -> new RuntimeException("Attendance record not found"));
		
		existAtt.setPunchInTime(updatedAttendance.getPunchInTime());
		existAtt.setPunchOutTime(updatedAttendance.getPunchOutTime());
		existAtt.setAttendanceStatus(updatedAttendance.getAttendanceStatus());
				
		Repo2.save(existAtt);
		
		return "Attendance record updated successfully.";
	}

	public List<AttendanceEntity> getAllAttendances() {
		return Repo2.findAll();
	}

	public AttendanceEntity deleteById(Integer attendanceId) {
		AttendanceEntity existAtt = Repo2.findById(attendanceId)
				.orElseThrow(() -> new RuntimeException("Attendance record not found"));
		Repo2.delete(existAtt);
		return existAtt;
	}

	public String deleteAllAttendances() {
		Repo2.deleteAll();
		return "All attendance records have been deleted.";
	}
}