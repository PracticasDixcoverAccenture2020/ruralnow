package ruralnow.houseService.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ruralnow.houseService.entity.Casa;

@Repository
public interface CasaRepository extends JpaRepository<Casa, Integer> {

	@Query(value="select * from casa c "
			   + "join poblacion p "
			   + "join provincia po "
			   + "where c.idpoblacion=p.idpoblacion and p.idprovincia=po.idprovincia and po.provincia like ?1", nativeQuery = true)	
	public List<Casa> findByProvincia(String provincia);
	
	@Query(value="select * from casa c join poblacion p where c.idpoblacion=p.idpoblacion and poblacion like ?1", nativeQuery = true)
	public List<Casa> findByPoblacion(String poblacion);
	
	public List<Casa> findByPoblacion_poblacion(String poblacion);
	
	@Query(value="select * from casa c where c.idcasa not in (select r.idcasa from reserva r where r.fecha_inicio <= ?1 and r.fecha_fin >= ?1)", nativeQuery = true)
	public List<Casa> findByReservaLibre(Date fecha);
	
}
