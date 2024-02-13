package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.ResisterDto;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
   @Autowired
	private UserService userservice;

	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody ResisterDto resisterdto)
	{
		return new ResponseEntity<>(userservice.resister(resisterdto),HttpStatus.OK);
	}
	
	@PutMapping("/verify-account")
	public ResponseEntity<String>verifyAccount(@RequestParam("email") String email,@RequestParam("otp") String otp) {
		return new ResponseEntity<String>(userservice.verifyAccount(email,otp),HttpStatus.OK);
	}
	
	@PutMapping("/regenerate-otp")
	public ResponseEntity<String> regenerateOtp(@RequestParam("email") String email)
	{
		return new ResponseEntity<>(userservice.regenerateOtp(email),HttpStatus.OK);
	}
	
	@PutMapping("/login")
	public ResponseEntity<String> login(@RequestBody LoginDto logindto)
	{
		return new ResponseEntity<>(userservice.login(logindto),HttpStatus.OK);
	}
	

	@PutMapping("/forgot-password")
	public ResponseEntity<String>forgotPassword(@RequestBody LoginDto loginDto){
		System.out.println(loginDto);
	return new ResponseEntity<>(userservice.forgotPassword(loginDto.getEmail()),HttpStatus.OK);
}
	
}
