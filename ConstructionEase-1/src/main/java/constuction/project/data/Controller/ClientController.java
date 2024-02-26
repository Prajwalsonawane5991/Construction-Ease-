package constuction.project.data.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import construction.project.data.dto.LoginDto;
import construction.project.data.dto.OtpDto;
import construction.project.data.dto.ResisterDto;
import construction.project.data.service.ClientService;
import constuction.project.data.Repository.ClientRepository;
import constuction.project.data.beans.Client;
import constuction.project.data.beans.Contractor;
import constuction.project.data.exception.ResourceNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/client")
public class ClientController {
	 @Autowired 
	 private ClientService clientser;
	 
	 @Autowired
	 private ClientRepository clientRepo;

		@PostMapping("/resister")
		public ResponseEntity<String> resister(@RequestBody ResisterDto resisterdto)
		{
			return new ResponseEntity<>(clientser.resister(resisterdto),HttpStatus.OK);
		}
		@GetMapping("/get")
		public List<Client> getContractorData()
		{
			
			return clientser.findAll();
		}
		@PutMapping("/verifyotp")
		public ResponseEntity<String> verifyAccount(@RequestBody OtpDto dto) {
			System.out.println("IN VERIFICATION METHOD");
			System.out.println(dto.getEmail()+" "+dto.getOtp()+"of v account");
			return new ResponseEntity<String>(clientser.verifyAccount(dto.getEmail(),dto.getOtp()), HttpStatus.OK);
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
		
		 @GetMapping("/details/{email}")
		    public ResponseEntity<Client> getClientDetailsByEmail(@PathVariable String email) {
		        Client client = clientser.getDetailsByEmail(email);
		        if (client != null) {
		            return new ResponseEntity<>(client, HttpStatus.OK);
		        } else {
		            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		        }
		    }
		 
		 
		 @GetMapping("/detailsById/{id}")
		 public ResponseEntity<Client> getClientDetailsById(@PathVariable long id) {
		     Optional<Client> clientOptional = clientRepo.findById(id);
		     if (clientOptional.isPresent()) {
		         Client client = clientOptional.get();
		         return ResponseEntity.ok(client);
		     } else {
		         throw new ResourceNotFoundException("Client not found with id: " + id);
		     }
		 }
		 
		 
		 @PutMapping("/status/{clientId}")
		    public Client updateClientStatus(@PathVariable Long clientId) {
		        return clientser.updateClientStatus(clientId);
		    }
		 
		 

}
