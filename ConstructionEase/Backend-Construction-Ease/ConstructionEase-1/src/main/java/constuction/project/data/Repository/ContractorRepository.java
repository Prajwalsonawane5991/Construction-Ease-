package constuction.project.data.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import constuction.project.data.beans.contractor;


@Repository
public interface ContractorRepository extends JpaRepository<contractor, Long> {

	Optional<contractor> findByEmail(String email);
	
	boolean existsContractorByEmail(String email);

}
