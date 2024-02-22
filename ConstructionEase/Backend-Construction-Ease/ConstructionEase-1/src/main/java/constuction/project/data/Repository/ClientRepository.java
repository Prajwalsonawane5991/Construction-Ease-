package constuction.project.data.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import constuction.project.data.beans.Client;
@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

	Optional<Client> findByEmail(String email);
}
