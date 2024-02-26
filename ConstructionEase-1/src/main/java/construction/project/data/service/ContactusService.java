package construction.project.data.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import constuction.project.data.Repository.ContactusRepository;
import constuction.project.data.beans.Contactus;

@Service
public class ContactusService {
	@Autowired
	private ContactusRepository contact;

	public void insertcotactus(Contactus contact2) {
		// TODO Auto-generated method stub
		contact.save(contact2);
	}

	

	public List<Contactus> find() {
		// TODO Auto-generated method stub
		return contact.findAll();
	}
}
