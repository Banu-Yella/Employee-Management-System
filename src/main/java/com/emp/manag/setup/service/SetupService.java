package com.emp.manag.setup.service;

import org.springframework.stereotype.Service;

import com.emp.manag.setup.dto.AdminSetupRequest;

@Service
public class SetupService {

    public String createAdmin(AdminSetupRequest request) {

        return "Admin setup not implemented yet";
    }

    public boolean isInitialized() {

        return false;
    }
}