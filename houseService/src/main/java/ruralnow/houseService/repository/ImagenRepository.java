package ruralnow.houseService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ruralnow.houseService.entity.Imagen;

@Repository
public interface ImagenRepository extends JpaRepository<Imagen, Integer> {

}
