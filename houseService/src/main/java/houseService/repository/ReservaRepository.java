package houseService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import houseService.entity.Reserva;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Integer> {
	
	@Query(value="select * from reserva where idcasa = ?1", nativeQuery = true)
	public List<Reserva> findByIdCasa(Integer id);
	
}
