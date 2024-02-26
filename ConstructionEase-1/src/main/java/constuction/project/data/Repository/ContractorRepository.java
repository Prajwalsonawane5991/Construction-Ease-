package constuction.project.data.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import constuction.project.data.beans.Contractor;


@Repository
public interface ContractorRepository extends JpaRepository<Contractor, Long> {

	Optional<Contractor> findByEmail(String email);

}
