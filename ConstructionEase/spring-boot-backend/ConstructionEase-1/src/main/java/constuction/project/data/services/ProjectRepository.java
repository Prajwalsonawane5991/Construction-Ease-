package constuction.project.data.services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import constuction.project.data.beans.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>{

	List<Project> findByContractorId(Long contractorId);

	

}
