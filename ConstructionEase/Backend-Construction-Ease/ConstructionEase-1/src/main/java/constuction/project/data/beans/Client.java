package constuction.project.data.beans;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String email;
	private String mobile;
	private String username;	
	private String password;
	private boolean active;

	private String otp;
	private LocalDateTime otpgenerationtime;

	public String getOtp() {
		return otp;
	}


	public void setOtp(String otp) {
		this.otp = otp;
	}


	public LocalDateTime getOtpgenerationtime() {
		return otpgenerationtime;
	}


	public void setOtpgenerationtime(LocalDateTime otpgenerationtime) {
		this.otpgenerationtime = otpgenerationtime;
	}


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public Client(long id, String email, String mobile, String username, String password, boolean active) {
		super();
		this.id = id;
		this.email = email;
		this.mobile = mobile;
		this.username = username;
		this.password = password;
		this.active = active;
	}
	public Client() {
		super();
	}
	
	
}
