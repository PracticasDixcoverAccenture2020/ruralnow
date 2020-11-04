package ruralnow.houseService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ruralnow.houseService.entity.Casa;

@Repository
public interface CasaRepository extends JpaRepository<Casa, Integer> {

	public List<Casa> findByMunicipio_id(Integer id);
}
