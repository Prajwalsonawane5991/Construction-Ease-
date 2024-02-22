package constuction.project.data.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import construction.project.data.dto.LoginDto;
import construction.project.data.dto.ResisterDto;
import construction.project.data.service.ClientService;
import constuction.project.data.beans.Client;

@CrossOrigin("*")
@RestController
@RequestMapping("/client")
public class ClientController {
	 @Autowired 
	 private ClientService clientser;

		@PostMapping("/resister")
		public ResponseEntity<String> resister(@RequestBody ResisterDto resisterdto)
		{
			return new ResponseEntity<>(clientser.resister(resisterdto),HttpStatus.OK);
		}
		@GetMapping("/client")
		public List<Client> getContractorData()
		{
			
			return clientser.findAll();
		}
		@PutMapping("/verifyotp")
		public ResponseEntity<String>verifyAccount(@RequestParam("email") String email,@RequestParam("otp") String otp) {
			return new ResponseEntity<String>(clientser.verifyAccount(email,otp),HttpStatus.OK);
		}
		
		@PutMapping("/regenerate-otp")
		public ResponseEntity<String> regenerateOtp(@RequestParam("email") String email)
		{
			return new ResponseEntity<>(clientser.regenerateOtp(email),HttpStatus.OK);
		}
		
		@PutMapping("/login")
		public ResponseEntity<String> login(@RequestBody LoginDto logindto)
		{
			return new ResponseEntity<>(clientser.login(logindto),HttpStatus.OK);
		}
}
