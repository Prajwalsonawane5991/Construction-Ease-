package construction.project.data.service;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import constuction.project.data.Repository.ContractorFeedBackRepo;
import constuction.project.data.beans.ContractorFeedback;

@Service
public class ContractorFeedBackService {
	@Autowired
	private ContractorFeedBackRepo confeedback;

	public List<ContractorFeedback> getContractorfeedback(PageRequest pageRequest) {
		
		return confeedback.gettop3feedback(pageRequest);
	}

	public void insertcontrctorfeedback(ContractorFeedback cf) {
		cf.setTime(LocalDateTime.now());
		confeedback.save(cf);
	}

	public void delete(int id) {
		confeedback.deleteById(id);
		
	}

	public int getAllcount() {
		// TODO Auto-generated method stub
		return (int) confeedback.count();
	}

}