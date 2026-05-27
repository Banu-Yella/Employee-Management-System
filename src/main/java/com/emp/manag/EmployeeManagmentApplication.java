package com.emp.manag;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = { "com.emp.manag.employee", "com.emp.manag.schedule", "com.emp.manag.user" })
public class EmployeeManagmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagmentApplication.class, args);
	}

}
