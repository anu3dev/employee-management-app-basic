package com.anu3dev.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anu3dev.model.Email;

public interface EmailDao extends JpaRepository<Email, Long> {}
