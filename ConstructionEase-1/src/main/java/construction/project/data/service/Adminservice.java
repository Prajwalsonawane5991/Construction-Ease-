package construction.project.data.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import constuction.project.data.Repository.Adminrepo;
import constuction.project.data.beans.Admin;



@Service
public class Adminservice {
	@Autowired
	Adminrepo adm;

	
	public List<Admin> findAll() {
		// TODO Auto-generated method stub
		return adm.findAll();
	}



}
