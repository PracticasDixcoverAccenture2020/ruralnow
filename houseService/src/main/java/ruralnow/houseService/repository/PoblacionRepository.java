package ruralnow.houseService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ruralnow.houseService.entity.Poblacion;

@Repository
public interface PoblacionRepository extends JpaRepository<Poblacion, Integer> {

	public List<Poblacion> findByProvincia_provincia(String provincia);
	
}
