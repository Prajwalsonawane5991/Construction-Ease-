package constuction.project.data.Repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import constuction.project.data.beans.ClientFeedback;


@Repository
public interface ClientFeedBackRepo extends JpaRepository<ClientFeedback, Integer> {
    @Query(value="select * from client_feedback order by time desc",nativeQuery=true)
	List<ClientFeedback> gettop3feedback(Pageable pageable);

}
