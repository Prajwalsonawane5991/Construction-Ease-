package constuction.project.data.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;


@Component
public class EmailUtilUser {

	
		@Autowired
		private JavaMailSender javamailsender;
		
		public void sendOtpEmail(String email,String otp)throws MessagingException
		{
		SimpleMailMessage simplemailMessage= new SimpleMailMessage();
			simplemailMessage.setTo(email);
			simplemailMessage.setSubject("Verify OTP");
			simplemailMessage.setText("Hello,Your OTP is "+ otp);
			MimeMessage mimeMessage=javamailsender.createMimeMessage();
			MimeMessageHelper mimemessageHelper=new MimeMessageHelper(mimeMessage);
			mimemessageHelper.setTo(email);
			mimemessageHelper.setSubject("Verify OTP");
			 // Constructing HTML content with OTP and verification link
		    String htmlContent = String.format("""
		        <div>
		            <p>Hello,</p>
		            <p>Your OTP is: <strong>%s</strong></p>		  
		        </div>
		        """, otp, email, otp);
		    mimemessageHelper.setText(htmlContent, true);
		    
		    // Sending the email
		    javamailsender.send(mimeMessage);
		}
		
		public void sendSetPasswordEmail(String email) throws MessagingException {
		    // Creating a simple mail message
		    SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		    simpleMailMessage.setTo(email);
		    simpleMailMessage.setSubject("Reset Your Password");
		 
		    
		    // Creating a MIME message for HTML content
		    MimeMessage mimeMessage = javamailsender.createMimeMessage();
		    MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
		    mimeMessageHelper.setTo(email);
		    mimeMessageHelper.setSubject("Reset Your Password");
		    
		    // Constructing HTML content with OTP and verification link
		    String htmlContent = String.format("""
		        <div>
		            <p>Hello,</p>
		            <p>Please click the following link to reset your password:</p>
		            <p><a href="http://localhost:9191/contractor/verify-account/%s" target="_blank">Click to reset your password</a></p>
		        </div>
		        """,  email);
		    mimeMessageHelper.setText(htmlContent, true);
		    
		    // Sending the email
		    javamailsender.send(mimeMessage);
		}
		
		
}
