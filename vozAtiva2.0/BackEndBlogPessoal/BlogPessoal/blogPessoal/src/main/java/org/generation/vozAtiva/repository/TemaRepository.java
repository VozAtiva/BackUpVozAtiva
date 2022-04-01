package org.generation.vozAtiva.repository;

import java.util.List;
import java.util.Optional;

import org.generation.vozAtiva.model.TemaModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TemaRepository extends JpaRepository<TemaModel, Long>{
	
	public List<TemaModel>findAllByDescricaoContainingIgnoreCase(String descricao);

	public Optional<TemaModel>findByDescricao(String descricao);
	
}
