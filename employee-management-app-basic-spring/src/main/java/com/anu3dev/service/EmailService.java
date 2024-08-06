package com.anu3dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.anu3dev.dao.EmailDAO;
import com.anu3dev.model.Email;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService implements IEmailService {
	@Autowired
	private JavaMailSender sender;
	@Value("{spring.mail.username}")
	private String fromEmailid;
	@Autowired
	private EmailDAO dao;

	@Override
	public String sendContactEmail(Email email) throws Exception {
		
		dao.save(email);
		
		MimeMessage mimeMessage = sender.createMimeMessage();
		
		MimeMessageHelper emailMessage = new MimeMessageHelper(mimeMessage, true);
		emailMessage.setFrom(fromEmailid);
		emailMessage.setTo(email.getEmailId());
		emailMessage.setSubject("We have received your query");
		emailMessage.setText("Your query is - " + email.getMessage());
		sender.send(mimeMessage); 
		return "We have received your query.";
	}
}
