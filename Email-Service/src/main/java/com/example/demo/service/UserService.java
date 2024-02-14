package com.example.demo.service;

import java.time.Duration;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.ResisterDto;
import com.example.demo.model.Contractor;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.EmailUtilUser;
import com.example.demo.util.Optutil;

import jakarta.mail.MessagingException;
@Service
public class UserService {

	@Autowired
	private Optutil otputil;
	@Autowired
	private EmailUtilUser emailutil;
	@Autowired
	private UserRepository userRepository;
	
	public String resister(ResisterDto resisterdto) {
	String otp=	otputil.otpGenerate();
	try {
		emailutil.sendOtpEmail(resisterdto.getEmail(), otp);
	}catch(MessagingException e) {
		throw new RuntimeException("Unable to send Otp please Try Angin");
	}
	User con=new User();
	con.setName(resisterdto.getName());
	con.setEmail(resisterdto.getEmail());
	con.setPassword(resisterdto.getPassword());
	con.setOtp(otp);
	con.setOtpgenerationtime(LocalDateTime.now());
	userRepository.save(con);
	return "user Resistation Successfully";
	}
	
	
	public String verifyAccount(String email,String otp)
	{
		User con= userRepository.findByEmail(email)
		.orElseThrow(()-> new RuntimeException("User not found with this email "+email));
		if(con.getOtp().equals(otp) && Duration.between(con.getOtpgenerationtime(),LocalDateTime.now()).getSeconds()<(5*60))
		{
			
			con.setActive(true);
			userRepository.save(con);
			return "OTP Verify Done";
			
		}
		return "Please Regenerate Otp and Try Again";
	}


	public String regenerateOtp(String email) {

		User con=userRepository.findByEmail(email)
		.orElseThrow(()-> new RuntimeException("user not found with this email "+email));
		String otp=otputil.otpGenerate();
		try {
			emailutil.sendOtpEmail(email, otp);
		}catch(MessagingException e) {
			throw new RuntimeException("Unable to send Otp please Try Angin");
		}
		con.setOtp(otp);
		con.setOtpgenerationtime(LocalDateTime.now());
		userRepository.save(con);
		return "Email sent...please Verify Account within 3 minutes";
	}


	public String login(LoginDto logindto) {
		User con= userRepository.findByEmail(logindto.getEmail())
				.orElseThrow(()-> new RuntimeException("User not found with this email "+logindto.getEmail()));
		if(logindto.getPassword().equals(con.getPassword()))
		{
			return "password is correct";
		}
		else if(!con.isActive())
		{
			return "your account is not verify";
			
		}
		
		
		return "login success";
	}



	public String forgotPassword(String email) {

		User con= userRepository.findByEmail(email)
					.orElseThrow(()-> new RuntimeException("Contractor not found with this email "+email));
		   try {
			emailutil.sendSetPasswordEmail(email);
		} catch (MessagingException e) {
			
			throw new RuntimeException("Unable to send set password email please try again");
		}
			return "Please check your email to set your new password for your account";
		}
	}

