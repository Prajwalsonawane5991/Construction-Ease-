package com.example.demo.service;

import java.time.Duration;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.ResisterDto;
import com.example.demo.model.Contractor;
import com.example.demo.repository.ContractorRepository;
import com.example.demo.util.Emailutil;
import com.example.demo.util.Optutil;


import jakarta.mail.MessagingException;
@Service
public class ContractorService {

	@Autowired
	private Optutil otputil;
	@Autowired
	private Emailutil emailutil;
	@Autowired
	private ContractorRepository contractorRepository;
	
	public String resister(ResisterDto resisterdto) {
	String otp=	otputil.otpGenerate();
	try {
		emailutil.sendOtpEmail(resisterdto.getEmail(), otp);
	}catch(MessagingException e) {
		throw new RuntimeException("Unable to send Otp please Try Angin");
	}
	Contractor con=new Contractor();
	con.setName(resisterdto.getName());
	con.setEmail(resisterdto.getEmail());
	con.setPassword(resisterdto.getPassword());
	con.setOtp(otp);
	con.setOtpgenerationtime(LocalDateTime.now());
	contractorRepository.save(con);
	return "Contractor Registered Successfully";
	}
	
	
	public String verifyAccount(String email,String otp)
	{
		Contractor con= contractorRepository.findByEmail(email)
		.orElseThrow(()-> new RuntimeException("Contractor not found with this email "+email));
		System.out.println(Duration.between(con.getOtpgenerationtime(),LocalDateTime.now()).getSeconds());
		if(con.getOtp().equals(otp) && Duration.between(con.getOtpgenerationtime(),LocalDateTime.now()).getSeconds()<(5*60)
				)
		{
			System.out.println("In Verify");
			con.setActive(true);
			contractorRepository.save(con);
			return "OTP Verification Done";
			
		}
		return "Please Regenerate Otp and Try Again";
	}


	public String regenerateOtp(String email) {

		Contractor con= contractorRepository.findByEmail(email)
		.orElseThrow(()-> new RuntimeException("Contractor not found with this email "+email));
		String otp=otputil.otpGenerate();
		try {
			emailutil.sendOtpEmail(email, otp);
		}catch(MessagingException e) {
			throw new RuntimeException("Unable to send Otp please Try Angin");
		}
		con.setOtp(otp);
		con.setOtpgenerationtime(LocalDateTime.now());
		contractorRepository.save(con);
		return "Email sent...please Verify Account within 3 minutes";
	}


	public String login(LoginDto logindto) {
		Contractor con= contractorRepository.findByEmail(logindto.getEmail())
				.orElseThrow(()-> new RuntimeException("Contractor not found with this email "+logindto.getEmail()));
		if(logindto.getPassword().equals(con.getPassword()))
		{
			return "login success";
		}
		else if(!con.isActive())
		{
			return "your account is not verify";
			
		}
		
		
		return "wrong credentials entered";
	}


	public String forgotPassword(String email) {
		Contractor con= contractorRepository.findByEmail(email)
				.orElseThrow(()-> new RuntimeException("Contractor not found with this email "+email));
	   try {
		emailutil.sendSetPasswordEmail(email);
	} catch (MessagingException e) {
		
		throw new RuntimeException("Unable to send set password email please try again");
	}
		return "Please check your email to set your new password for your account";
	}

}
