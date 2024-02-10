package constuction.project.data.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import constuction.project.data.beans.contractor;
import constuction.project.data.exception.ResourceNotFoundException;
import constuction.project.data.services.ContractorRepository;


@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/services/")
public class ContractorController  {
	
	
	@Autowired
	private ContractorRepository CRepo;
	
	@GetMapping("/contractors")
	public List<contractor> getContractorData()
	{
		
		return CRepo.findAll();
	}
	
	@PostMapping("/contractors")
	public contractor createContractor(@RequestBody contractor contractordata)
	{
		return CRepo.save(contractordata);
	}
	
	 // build get employee by id REST API
    @GetMapping("/contractors/{id}")
    public ResponseEntity<contractor> getContractorById(@PathVariable long id){
        contractor con = CRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id));
        return ResponseEntity.ok(con);
    }

    // build update employee REST API
    @PutMapping("/contractors/{id}")
    public ResponseEntity<contractor> updateContractor(@PathVariable long id,@RequestBody contractor contractordetails) {
        contractor updatecontractor = CRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        updatecontractor.setUsername(contractordetails.getUsername());
        updatecontractor.setPassword(contractordetails.getPassword());
        updatecontractor.setEmail(contractordetails.getEmail());
        updatecontractor.setMobile(contractordetails.getMobile());
       

        CRepo.save(updatecontractor);

        return ResponseEntity.ok(updatecontractor);
    }

    // build delete employee REST API
    @DeleteMapping("/contractors/{id}")
    public ResponseEntity<HttpStatus> deleteContractor(@PathVariable long id){

    	contractor con = CRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        CRepo.delete(con);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
