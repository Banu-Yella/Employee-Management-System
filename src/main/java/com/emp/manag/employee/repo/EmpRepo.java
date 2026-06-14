package com.emp.manag.employee.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emp.manag.employee.entity.EmpEntity;

@Repository
public interface EmpRepo
        extends JpaRepository<EmpEntity, Integer> {

<<<<<<< HEAD
    boolean existsByUserUserId(
            Integer userId);

    Optional<EmpEntity> findByUserUserId(
            Integer userId);
}
=======
}
>>>>>>> f759ccff23d20de1a3e7334cfca05632bc51aea1
