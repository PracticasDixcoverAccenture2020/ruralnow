package ruralnow.houseService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ruralnow.houseService.entity.Servicio;

@Repository
public interface ServicioRepository extends JpaRepository<Servicio,Integer> {

}
