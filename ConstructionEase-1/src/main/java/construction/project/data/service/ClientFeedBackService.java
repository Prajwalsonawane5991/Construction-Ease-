package construction.project.data.service;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import constuction.project.data.Repository.ClientFeedBackRepo;
import constuction.project.data.beans.ClientFeedback;

@Service
public class ClientFeedBackService {
	@Autowired
	private ClientFeedBackRepo cfeedback;
	

	public List<ClientFeedback> getClientfeedback(PageRequest pageRequest) {
		
		return cfeedback.gettop3feedback(pageRequest);
	}

	public void insertClientFeedback(ClientFeedback cf) {
		
	    
	    cf.setTime(LocalDateTime.now());
	    cfeedback.save(cf);

	    
	}

	public void delete(int id) {
		// TODO Auto-generated method stub
		cfeedback.deleteById(id);
	}

	public int getAllcount() {
		// TODO Auto-generated method stub
		return (int) cfeedback.count();
	}
}
