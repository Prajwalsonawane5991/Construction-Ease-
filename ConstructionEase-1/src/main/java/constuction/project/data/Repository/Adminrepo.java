package constuction.project.data.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import constuction.project.data.beans.Admin;


@Repository
public interface Adminrepo extends JpaRepository<Admin, Integer> {

	

}
