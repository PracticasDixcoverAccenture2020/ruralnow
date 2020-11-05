package ruralnow.houseService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ruralnow.houseService.entity.Poblacion;

@Repository
public interface PoblacionRepository extends JpaRepository<Poblacion, Integer> {

}