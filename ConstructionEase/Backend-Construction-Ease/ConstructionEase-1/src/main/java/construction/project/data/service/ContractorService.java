package construction.project.data.service;

import java.time.Duration;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import construction.project.data.dto.LoginDto;
import construction.project.data.dto.ResisterDto;
import constuction.project.data.Repository.ContractorRepository;
import constuction.project.data.beans.contractor;
import constuction.project.data.utils.EmailOtp;
import constuction.project.data.utils.EmailUtilUser;
import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class ContractorService {

	@Autowired
	private EmailOtp otputil;
	@Autowired
	private EmailUtilUser emailutil;
	@Autowired
	private ContractorRepository crepo;

	public String resister(ResisterDto resisterdto) {
		String otp = otputil.otpGenerate();
		if(crepo.existsContractorByEmail(resisterdto.getEmail()))
			throw new RuntimeException("Email Already Exists");
		try {
			emailutil.sendOtpEmail(resisterdto.getEmail(), otp);
		} catch (MessagingException e) {
			throw new RuntimeException("Unable to send Otp please Try Angin");
		}
		contractor con = new contractor();
		con.setUsername(resisterdto.getUsername());
		con.setEmail(resisterdto.getEmail());
		con.setPassword(resisterdto.getPassword());
		con.setOtp(otp);
		con.setOtpgenerationtime(LocalDateTime.now());
		con.setMobile(resisterdto.getMobile());
		crepo.save(con);
		return "Contractor Registered Successfully";
	}

	public String verifyAccount(String email, String otp) {
		contractor con = crepo.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("Contractor not found with this email " + email));
		System.out.println(Duration.between(con.getOtpgenerationtime(), LocalDateTime.now()).getSeconds());
		Duration duration = Duration.between(con.getOtpgenerationtime(), LocalDateTime.now());
		System.out.println(duration.toSeconds());
		if (!con.getOtp().equals(otp)) {
			throw new RuntimeException("OTP Mismatch");
		}
		if (Duration.between(con.getOtpgenerationtime(), LocalDateTime.now()).getSeconds() < (5 * 60)) {
			System.out.println("In Verify");
			con.setActive(true);
			crepo.save(con);
			return "OTP Verification Done";
		}
		throw new RuntimeException("Regenerate OTP, Time Expired");

	}

	public String regenerateOtp(String email) {

		contractor con = crepo.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("Contractor not found with this email " + email));
		String otp = otputil.otpGenerate();
		try {
			emailutil.sendOtpEmail(email, otp);
			con.setOtp(otp);
			con.setActive(false);
			con.setOtpgenerationtime(LocalDateTime.now());
		} catch (MessagingException e) {
			throw new RuntimeException("Unable to send Otp please Try Angin");
		}
		return "Email sent...please Verify Account within 3 minutes";
	}

	public String login(LoginDto logindto) {
		contractor con = crepo.findByEmail(logindto.getEmail())
				.orElseThrow(() -> new RuntimeException("Contractor not found with this email " + logindto.getEmail()));
		if (logindto.getPassword().equals(con.getPassword())) {
			return "login success";
		} else if (!con.isActive()) {
			return "your account is not verify";

		}

		return "wrong credentials entered";
	}

	public String forgotPassword(String email) {
		contractor con = crepo.findByEmail(email)
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
		contractor con = crepo.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("Contractor not found with this email " + email));
		con.setPassword(password);
		con.setActive(true);
	}
}
