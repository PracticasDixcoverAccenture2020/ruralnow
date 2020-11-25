package houseService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import houseService.entity.Provincia;

@Repository
public interface ProvinciaRepository extends JpaRepository<Provincia, Integer> {
	
	public Provincia findByProvincia(String provincia);

}
