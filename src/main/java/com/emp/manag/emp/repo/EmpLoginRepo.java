package com.emp.manag.emp.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emp.manag.entity.EmpLoginEntity;

@Repository
public interface EmpLoginRepo extends JpaRepository<EmpLoginEntity, Integer> {

	Optional<EmpLoginEntity> findByUsername(String username);

}
