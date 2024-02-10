package constuction.project.data.services;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import constuction.project.data.beans.contractor;


@Repository
public interface ContractorRepository extends JpaRepository<contractor, Long> {

}
