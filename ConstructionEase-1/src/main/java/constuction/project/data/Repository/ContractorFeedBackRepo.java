package constuction.project.data.Repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import constuction.project.data.beans.ContractorFeedback;


@Repository
public interface ContractorFeedBackRepo extends JpaRepository<ContractorFeedback, Integer> {
	@Query(value="select * from contractor_feedback order by time desc",nativeQuery=true)
	List<ContractorFeedback> gettop3feedback(PageRequest pageRequest);

}
