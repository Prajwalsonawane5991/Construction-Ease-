package construction.project.data.service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import construction.project.data.dto.LoginDto;
import construction.project.data.dto.ResisterDto;
import constuction.project.data.Repository.ClientRepository;
import constuction.project.data.beans.Client;
import constuction.project.data.beans.Contractor;
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
		con.setMobile(resisterdto.getMobile());
		con.setOtp(otp);
		con.setOtpgenerationtime(LocalDateTime.now());
		clientRepo.save(con);
		return "Client Registered Successfully";
	}
	
	
	
	public String verifyAccount(String email, String otp) {
		System.out.println("In Verify");
		Client con= clientRepo.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("Client not found with this email " + email));
		System.out.println(Duration.between(con.getOtpgenerationtime(), LocalDateTime.now()).getSeconds());
		Duration duration = Duration.between(con.getOtpgenerationtime(), LocalDateTime.now());
		System.out.println(duration.toSeconds());
		if (!con.getOtp().equals(otp)) {
			throw new RuntimeException("OTP Mismatch");
		}
		if (Duration.between(con.getOtpgenerationtime(), LocalDateTime.now()).getSeconds() < (5 * 60)) {
			System.out.println("In Verify if");
			con.setActive(true);
			clientRepo.save(con);
			return "OTP Verification Done";
		}
		throw new RuntimeException("Regenerate OTP, Time Expired");

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
	
	public Client getbyid(long id) {
		Optional<Client> p=clientRepo.findById(id);
		if(p!=null)
		{
			return p.get();
		}
		return null;
	}

	public void update(Client c) {
		Optional<Client>op=clientRepo.findById(c.getId());
		 if(op.isPresent())
		 {
			 Client p2=op.get();
			 p2.setUsername(c.getUsername());
			 p2.setEmail(c.getEmail());
			 clientRepo.save(p2);
			
		 }
		
	}

	public void delete(long id) {
		clientRepo.deleteById(id);
		
	}

	public int getAllcount() {
		// TODO Auto-generated method stub
		return (int) clientRepo.count();
	}


	
	public Client getDetailsByEmail(String email) {
        return clientRepo.findByEmail(email).orElseThrow(()-> new RuntimeException("Client not found with this email "+email));
    }


	public Object findById(long id) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public Client updateClientStatus(Long clientId) {
        Client client = clientRepo.findById(clientId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid client ID: " + clientId));
        client.setStatus(true);
        return clientRepo.save(client);
    }

}
