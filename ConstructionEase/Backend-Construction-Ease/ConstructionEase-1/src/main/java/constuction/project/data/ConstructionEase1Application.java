package constuction.project.data;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"construction.project.data"})
public class ConstructionEase1Application 
{

	public static void main(String[] args) {
		SpringApplication.run(ConstructionEase1Application.class, args);
	}

}
