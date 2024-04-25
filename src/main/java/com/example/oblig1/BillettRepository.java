package com.example.oblig1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(nyBillett billett){
        String sql = "INSERT INTO BillettTabell (film, antall, fornavn, etternavn, telefon, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, billett.getFilm(), billett.getAntall(), billett.getFornavn(), billett.getEtternavn(), billett.getTelefonNr(), billett.getEpost());

    }

    public List<nyBillett> hentAlleBilletter(){
        String sql = "SELECT * FROM BillettTabell";
        List<nyBillett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(nyBillett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM BillettTabell";
        db.update(sql);
    }

}
