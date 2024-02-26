package constuction.project.data.Controller;

import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import constuction.project.data.Repository.ContractorRepository;
import constuction.project.data.Repository.ProjectRepository;
import constuction.project.data.beans.Project;
import constuction.project.data.beans.contractor;
import constuction.project.data.exception.ResourceNotFoundException;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/services/")
public class ProjectController {

	@Autowired
	private ProjectRepository projectService;
	@Autowired
	private ContractorRepository contractorRepository;

	@PostMapping("/projects")
	public ResponseEntity<?> createproject(
		@RequestPart("file") MultipartFile file,
			@RequestParam("category") String category, @RequestParam("name") String name,
			@RequestParam("description") String description, @RequestParam("price") double price,
			@RequestParam("contractorId") Long contractorId,@RequestParam("negotiable") String negotiable,
			@RequestParam("area") String area) {
		try {

			Project project = new Project();
			project.setCategory(category);
			project.setName(name);
			project.setDescription(description);
			project.setPrice(price);
			project.setNegotiable(negotiable);
			project.setArea(area);

			System.out.println(project);
			contractor contractor = contractorRepository.findById(contractorId)
					.orElseThrow(() -> new ResourceNotFoundException("Contractor not found"));

			contractor.setProject(project);
			// Save image file and set image path
			if (!file.isEmpty()) {
			// Save the file to the specified directory
			String uploadDir = "C:/Users/Yasir/Desktop/Tushar/Construction-Ease-/ConstructionEase/React-frontend/construction-ease/src/assets/img/contractor/";
			String imagePath = file.getOriginalFilename();
			File uploadedFile = new File(uploadDir + file.getOriginalFilename());
			FileOutputStream outputStream = new FileOutputStream(uploadedFile);
			outputStream.write(file.getBytes());
			outputStream.close();
			// Set image path in the project
			project.setImagePath(imagePath);
			}

			// Save the project
			contractorRepository.save(contractor);

			return new ResponseEntity<>("project created successfully", HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>("Failed to create project: " + e.getMessage(),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
    
	@GetMapping("/projects/{id}")
	public ResponseEntity<List<Project>> getProductsById(@PathVariable Long id) {
	    System.out.println("id :" + id);
	    Project project = projectService.findById(id).orElseThrow(() -> new ResourceNotFoundException("Project not found with id:" + id));
	    
	    // Wrap the project object inside a list
	    List<Project> projectList = new ArrayList<>();
	    projectList.add(project);
	    
	    return ResponseEntity.ok(projectList);
	}
	
	@GetMapping("/getProjects/{category}")
	public List<Project> getProjectByCategory(@PathVariable String category)
	{
		return projectService.findByCategory(category);
	}
	
	
			    
}
