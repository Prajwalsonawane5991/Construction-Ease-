package constuction.project.data.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import constuction.project.data.beans.Project;


@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
	
	List<Project> findByContractorId(Long contractorId);
	List<Project> findByCategory(String category);

}
