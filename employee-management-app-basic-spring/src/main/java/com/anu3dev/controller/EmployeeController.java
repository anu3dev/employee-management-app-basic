package com.anu3dev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anu3dev.dao.EmployeeDAO;
import com.anu3dev.model.Employee;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	@Autowired
	private EmployeeDAO dao;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmp(){
		return dao.findAll();
	}
	
	@PostMapping("/addEmployee")
	public Employee addEmp(@RequestBody Employee emp) {
		return dao.save(emp);
	}
}
