package construction.project.data.service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import construction.project.data.dto.LoginDto;
import construction.project.data.dto.ResisterDto;
import constuction.project.data.Repository.ContractorRepository;
import constuction.project.data.beans.Contractor;
import constuction.project.data.utils.EmailOtp;
import constuction.project.data.utils.EmailUtilUser;
import jakarta.mail.MessagingException;


@Service
public class ContractorService {

	@Autowired
	private EmailOtp otputil;
	@Autowired
	private EmailUtilUser emailutil;
	@Autowired
	private ContractorRepository crepo;
	
	public String resister(ResisterDto resisterdto) {
	String otp=	otputil.otpGenerate();
	try {
		emailutil.sendOtpEmail(resisterdto.getEmail(), otp);
	}catch(MessagingException e) {
		throw new RuntimeException("Unable to send Otp please Try Angin");
	}
	Contractor con=new Contractor();
	con.setUsername(resisterdto.getUsername());
	con.setEmail(resisterdto.getEmail());
	con.setPassword(resisterdto.getPassword());
	con.setMobile(resisterdto.getMobile());
	con.setOtp(otp);
	con.setOtpgenerationtime(LocalDateTime.now());
	crepo.save(con);
	return "Contractor Registered Successfully";
	}
	
	public List<Contractor> getAllContractors() {
		// TODO Auto-generated method stub
		return crepo.findAll();
	}
	
	
	
	
	public String verifyAccount(String email, String otp) {
		System.out.println("In Verify");
		Contractor con = crepo.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("Contractor not found with this email " + email));
		System.out.println(Duration.between(con.getOtpgenerationtime(), LocalDateTime.now()).getSeconds());
		Duration duration = Duration.between(con.getOtpgenerationtime(), LocalDateTime.now());
		System.out.println(duration.toSeconds());
		if (!con.getOtp().equals(otp)) {
			throw new RuntimeException("OTP Mismatch");
		}
		if (Duration.between(con.getOtpgenerationtime(), LocalDateTime.now()).getSeconds() < (5 * 60)) {
			System.out.println("In Verify if");
			con.setActive(true);
			crepo.save(con);
			return "OTP Verification Done";
		}
		throw new RuntimeException("Regenerate OTP, Time Expired");

	}


	public String regenerateOtp(String email) {

		Contractor con= crepo.findByEmail(email)
		.orElseThrow(()-> new RuntimeException("Contractor not found with this email "+email));
		String otp=otputil.otpGenerate();
		try {
			emailutil.sendOtpEmail(email, otp);
		}catch(MessagingException e) {
			throw new RuntimeException("Unable to send Otp please Try Angin");
		}
		con.setOtp(otp);
		con.setOtpgenerationtime(LocalDateTime.now());
		crepo.save(con);
		return "Email sent...please Verify Account within 3 minutes";
	}


	public String login(LoginDto logindto) {
		Contractor con= crepo.findByEmail(logindto.getEmail())
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
		Contractor con = crepo.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("Contractor not found with this email " + email));
		try {
			String resetOtp = otputil.otpGenerate();
			con.setOtp(resetOtp);
			con.setOtpgenerationtime(LocalDateTime.now());
			emailutil.sendOtpEmail(email, resetOtp);
		} catch (MessagingException e) {

			throw new RuntimeException("Unable to send OTP please try again later");
		}
		return "OTP Sent";
	}

	public void resetPassword(String email, String password) {
		Contractor con = crepo.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("Contractor not found with this email " + email));
		con.setPassword(password);
		con.setActive(true);
	}
	
	public Contractor getbyid(int id) {
		Optional<Contractor> p=crepo.findById((long) id);
		if(p!=null)
		{
			return p.get();
		}
		return null;
	}
	public void update(Contractor c) {
		Optional<Contractor>op=crepo.findById(c.getId());
		if(op.isPresent())
		{
			Contractor p2=op.get();
			p2.setUsername(c.getUsername());
			p2.setEmail(c.getEmail());
			crepo.save(p2);

		}

	}

	public void delete(int id) {
		// TODO Auto-generated method stub
		crepo.deleteById((long) id);
	}

	public int getAllcount() {
		// TODO Auto-generated method stub
		return (int) crepo.count();
	}
	
	
	
}

