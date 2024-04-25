package com.example.oblig1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ControllerTest {
    @Autowired
    BillettRepository rep;
    //public final List<nyBillett> alleKinoBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreKinobillett(nyBillett innNyBillett){rep.lagreBillett(innNyBillett);}
    @GetMapping("/hentAlle")
    public List<nyBillett>hentAlle(){return rep.hentAlleBilletter();}

    @GetMapping("/slettAlle")
    public void slettAlle(){rep.slettAlleBilletter();}

}
