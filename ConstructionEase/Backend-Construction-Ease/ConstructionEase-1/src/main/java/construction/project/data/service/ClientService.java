package construction.project.data.service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import construction.project.data.dto.LoginDto;
import construction.project.data.dto.ResisterDto;
import constuction.project.data.Repository.ClientRepository;
import constuction.project.data.beans.Client;
import constuction.project.data.utils.EmailOtp;
import constuction.project.data.utils.EmailUtilUser;
import jakarta.mail.MessagingException;

@Service
public class ClientService {
	@Autowired
	private EmailOtp otputil;
	@Autowired
	private EmailUtilUser emailutil;
	@Autowired
	private ClientRepository clientRepo;

	public String resister(ResisterDto resisterdto) {
		String otp=	otputil.otpGenerate();
		try {
			emailutil.sendOtpEmail(resisterdto.getEmail(), otp);
		}catch(MessagingException e) {
			throw new RuntimeException("Unable to send Otp please Try Angin");
		}
		Client con=new Client();
		con.setUsername(resisterdto.getUsername());
		con.setEmail(resisterdto.getEmail());
		con.setPassword(resisterdto.getPassword());
		con.setOtp(otp);
		con.setOtpgenerationtime(LocalDateTime.now());
		clientRepo.save(con);
		return "Client Registered Successfully";
	}
	
	
	public String verifyAccount(String email,String otp)
	{
		Client con= clientRepo.findByEmail(email)
		.orElseThrow(()-> new RuntimeException("client not found with this email "+email));
		if(con.getOtp().equals(otp) && Duration.between(con.getOtpgenerationtime(),LocalDateTime.now()).getSeconds()<(3*60))
		{
			
			con.setActive(true);
			clientRepo.save(con);
			return "OTP Verify Done";
			
		}
		return "Please Regenerate Otp and Try Again";
	}


	public String regenerateOtp(String email) {

		Client con=clientRepo.findByEmail(email)
		.orElseThrow(()-> new RuntimeException("Client not found with this email "+email));
		String otp=otputil.otpGenerate();
		try {
			emailutil.sendOtpEmail(email, otp);
		}catch(MessagingException e) {
			throw new RuntimeException("Unable to send Otp please Try Angin");
		}
		con.setOtp(otp);
		con.setOtpgenerationtime(LocalDateTime.now());
		clientRepo.save(con);
		return "Email sent...please Verify Account within 3 minutes";
	}


	public String login(LoginDto logindto) {
		Client con= clientRepo.findByEmail(logindto.getEmail())
				.orElseThrow(()-> new RuntimeException("Client not found with this email "+logindto.getEmail()));
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


	public List<Client> findAll() {
		
		return clientRepo.findAll();
	}

}
