package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Contractor;

@Repository
public interface ContractorRepository extends JpaRepository<Contractor, Integer>{

	Optional<Contractor> findByEmail(String email);

}
