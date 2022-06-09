package cl.danoespinoza.jframework2.web.rest;

import cl.danoespinoza.jframework2.domain.PersonaDummy;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Dummy {
    
    @RequestMapping(value = "/dummy",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<PersonaDummy> dummy() throws URISyntaxException, Exception {
        ArrayList<PersonaDummy> list = new ArrayList<>();
        list.add(new PersonaDummy("Alan", "Brito"));
        list.add(new PersonaDummy("Soila", "Cerda"));
        list.add(new PersonaDummy("Aquiles", "Brinco"));
        list.add(new PersonaDummy("Aquiles", "Baeza"));
        list.add(new PersonaDummy("Armando", "Casas"));
        list.add(new PersonaDummy("Elba", "Zurita"));
        list.add(new PersonaDummy("Luz", "Rojas"));
        list.add(new PersonaDummy("Luz", "Alta"));
        
        return list;
    }
}
