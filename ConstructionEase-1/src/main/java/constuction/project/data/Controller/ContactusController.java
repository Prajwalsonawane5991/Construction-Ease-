package constuction.project.data.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import construction.project.data.service.ContactusService;
import constuction.project.data.beans.Contactus;

@RestController
@CrossOrigin("*")
@RequestMapping("/contactus")
public class ContactusController {
	
     @Autowired
     ContactusService contactser;
	@PostMapping("/insert")
	public ResponseEntity<String> insert(@RequestBody Contactus contact)
	{
		contactser.insertcotactus(contact);
		return ResponseEntity.ok("Data Inserted");
	}
	
	@GetMapping("/get")
	public ResponseEntity<List<Contactus>> getall()
	{
		List<Contactus> contr = contactser.find();

        if (contr.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(contr, HttpStatus.OK);
        }

	}
	
}