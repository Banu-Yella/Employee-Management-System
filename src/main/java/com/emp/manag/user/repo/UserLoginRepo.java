package com.emp.manag.user.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emp.manag.user.entity.UserLoginEntity;

public interface UserLoginRepo extends JpaRepository<UserLoginEntity, Integer> {

}
