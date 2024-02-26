package constuction.project.data.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import constuction.project.data.beans.Contactus;
@Repository
public interface ContactusRepository extends JpaRepository<Contactus, Long> {

}
