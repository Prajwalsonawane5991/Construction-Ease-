package constuction.project.data.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import constuction.project.data.beans.TransactionDetails;


@Repository
public interface TransactionRepository extends JpaRepository<TransactionDetails, Long>
{

}
