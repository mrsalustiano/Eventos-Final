package com.qintess.eventos.api.dao;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.qintess.eventos.api.domain.Casa;

@Repository
@CrossOrigin("http://localhost:4200")
public class CasaDaoImpl extends AbstractDao<Casa, Long> implements CasaDao {
	
	

}
