package org.generation.vozAtiva.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import org.hibernate.annotations.UpdateTimestamp;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_postagens")

public class PostagemModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotBlank(message = "O atributo é Obrigatório!")
	@Size(min = 5, max = 100, message = "O atributo titulo deve ter no mínimo 5 e no máximo 100 caracteres")
	private String titulo;

	@NotBlank(message = "O atributo é Obrigatório!")
	@Size(min = 10, max = 1000, message = "O atributo titulo deve ter no mínimo 5 e no máximo 1000 caracteres")
	private String texto;

	@UpdateTimestamp
	private LocalDate data;

	private String foto;

	@ManyToOne
	@JsonIgnoreProperties("postagem") // parar loop infinito
	private TemaModel tema;

	@ManyToOne
	@JsonIgnoreProperties("postagem") // parar loop infinito
	private UsuarioModel usuario;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public TemaModel getTema() {
		return tema;
	}

	public void setTema(TemaModel tema) {
		this.tema = tema;
	}

	public UsuarioModel getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioModel usuario) {
		this.usuario = usuario;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

}
