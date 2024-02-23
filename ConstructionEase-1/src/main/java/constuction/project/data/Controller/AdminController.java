package constuction.project.data.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
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

import construction.project.data.service.Adminservice;
import construction.project.data.service.ClientFeedBackService;
import construction.project.data.service.ClientService;
import construction.project.data.service.ContractorFeedBackService;
import construction.project.data.service.ContractorService;
import constuction.project.data.Repository.TransactionRepository;
import constuction.project.data.beans.Admin;
import constuction.project.data.beans.Client;
import constuction.project.data.beans.ClientFeedback;
import constuction.project.data.beans.Contractor;
import constuction.project.data.beans.ContractorFeedback;
import constuction.project.data.beans.TransactionDetails;


@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private Adminservice admser;
	@Autowired 
	private ClientService clientservice;
	@Autowired 
	private ContractorService contractorservice;
	
	@Autowired 
	private ClientFeedBackService clientfeedback;
	@Autowired 
	private ContractorFeedBackService contractorfeedback;
	
	@Autowired
	private TransactionRepository TRepo;
	
	
	
	@GetMapping("/get")
	public ResponseEntity<List<Admin>> getalladmin()
	
	{
		 List<Admin> admin = admser.findAll();

	        if (admin.isEmpty()) {
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        } else {
	            return new ResponseEntity<>(admin, HttpStatus.OK);
	        }
	}
	@GetMapping("/clientlist")
    public ResponseEntity<List<Client>> getAllClients() {
        List<Client> clients = clientservice.findAll();

        if (clients.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(clients, HttpStatus.OK);
        }
    }
	
	@GetMapping("/contractorlist")
    public ResponseEntity<List<Contractor>> getAllContractor() {
        List<Contractor> contr = contractorservice.getAllContractors();

        if (contr.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(contr, HttpStatus.OK);
        }
    }
	
	//for update the user and contractor profile
	@GetMapping("/client/{id}")
	public ResponseEntity<Client> getclientbyId(@PathVariable int id)
	{
		Client p=clientservice.getbyid(id);
		return ResponseEntity.ok(p);
	}
	
	@GetMapping("/contractor/{id}")
	public ResponseEntity<Contractor> getcontractorbyId(@PathVariable int id)
	{
		Contractor p=contractorservice.getbyid(id);
		return ResponseEntity.ok(p);
	}
	
	
	 @PutMapping("/client/{id}")
		public ResponseEntity<String> updateclient(@RequestBody Client c)
		{
		 clientservice.update(c);
			return ResponseEntity.ok("Data Updated");
		}

	 @PutMapping("/contractor/{id}")
		public ResponseEntity<String> updatecontractor(@RequestBody Contractor c)
		{
		 contractorservice.update(c);
			return ResponseEntity.ok("Data Updated");
		}
	 @DeleteMapping("client/{id}")
		public ResponseEntity<String> deleteclient(@PathVariable int id)
		{
			clientservice.delete(id);
			return ResponseEntity.ok("Data deleted");
			
		}
	 @DeleteMapping("contractor/{id}")
		public ResponseEntity<String> deletecontractor(@PathVariable int id)
		{
			contractorservice.delete(id);
			return ResponseEntity.ok("Data deleted");
			
		}
	 
	 @GetMapping("/viewclientfeedback")
	    public ResponseEntity<List<ClientFeedback>> getClientfeedback() {
	        List<ClientFeedback> client = clientfeedback.getClientfeedback(PageRequest.of(0, 3));

	        if (client.isEmpty()) {
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        } else {
	            return new ResponseEntity<>(client, HttpStatus.OK);
	        }
	    }
	 @GetMapping("/viewcontractorfeedback")
	    public ResponseEntity<List<ContractorFeedback>> getContractorfeedback() {
	        List<ContractorFeedback> contractor = contractorfeedback.getContractorfeedback(PageRequest.of(0, 3));

	        if (contractor.isEmpty()) {
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        } else {
	            return new ResponseEntity<>(contractor, HttpStatus.OK);
	        }
	    }
	 @PostMapping("/clientfeedback")
		public ResponseEntity<String> insertfeedbackclient(@RequestBody ClientFeedback cf)
		{
		 clientfeedback.insertClientFeedback(cf);
			return ResponseEntity.ok("Data Inserted");
			
		}
	 @PostMapping("/contractorfeedback")
		public ResponseEntity<String> insertfeedbackcontractor(@RequestBody ContractorFeedback cf)
		{
		 contractorfeedback.insertcontrctorfeedback(cf);
			return ResponseEntity.ok("Data Inserted");
			
		}
	 
	 @DeleteMapping("contractorfeedback/{id}")
		public ResponseEntity<String> deletecontractorfeedback(@PathVariable int id)
		{
		 contractorfeedback.delete(id);
			return ResponseEntity.ok("Data deleted");
			
		}
	 @DeleteMapping("clientfeedback/{id}")
		public ResponseEntity<String> deleteclientfeedback(@PathVariable int id)
		{
		 clientfeedback.delete(id);
			return ResponseEntity.ok("Data deleted");
			
		}
	 @GetMapping("client/count")
	 public int clientcount()
	 {
		 return clientservice.getAllcount();
	 }
	 @GetMapping("clientfeedback/count")
	 public int clientfeedbackcount()
	 {
		 return clientfeedback.getAllcount();
	 }
	 @GetMapping("contractor/count")
	 public int contractorcount()
	 {
		 return contractorservice.getAllcount();
	 }
	 @GetMapping("contractorfeedback/count")
	 public int contractorfeedbackcount()
	 {
		 return clientfeedback.getAllcount();
	 }
	   @PostMapping("/saveTransaction")
		 public ResponseEntity<String> saveTransaction(@RequestBody TransactionDetails transactionDetails) {
		     // Save the transaction details to the database using your repository
		     // For example:
		     // transactionRepository.save(transactionDetails);
			 TRepo.save(transactionDetails);
		     return ResponseEntity.ok("Transaction details saved successfully");
		 }
}