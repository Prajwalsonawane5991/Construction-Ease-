package constuction.project.data.utils;

import java.util.Random;

import org.springframework.stereotype.Component;


@Component
public class EmailOtp {
	
	public String otpGenerate()
	{
		Random random=new Random();
		int rnNumber=random.nextInt(9999);
		String output=Integer.toString(rnNumber);
		while(output.length()<4)
		{
			output="0"+ output;
		}
		return output;
	}

}
