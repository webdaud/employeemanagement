package com.limecommerce.test.project;

import com.limecommerce.test.project.auth.crudauthinterface;
import com.limecommerce.test.project.auth.dbuser;
import com.limecommerce.test.project.control.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class restrouter {
    @Autowired
    private crudinterface a;
    @Autowired
    private crudauthinterface b;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("user")
    public List<dbkaryawan>  listuser() {
        return (List<dbkaryawan>) a.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("login")
    public Optional<dbuser> login(@RequestBody @Validated dbuser dbu) {
        Optional<dbuser> result = b.findFirstByEmailEqualsAndPasswordEquals(dbu.getEmail(),dbu.getPassword() );
        return result;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("register")
    public String register(@RequestBody @Validated dbuser dbu) {
        b.save(dbu);
        return "Selesai";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("employee")
    public List<dbkaryawan>  listemployee() {
        return (List<dbkaryawan>) a.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("employee/insert")
    public String employeeinsert(@RequestBody @Validated dbkaryawan db) {
        a.save(db);
        return "Selesai";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("employee/search")
    public List<dbkaryawan>  listemployeesearch() {
        return (List<dbkaryawan>) a.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("employee/edit/{id}")
    public dbkaryawan listemployeeedit(@PathVariable int id) {
        Optional<dbkaryawan> result = a.findById(id); 
        return a.findFirstByIdIs(id);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("employee/edit/{id}")
    public dbkaryawan listemployeeeditupdate(@RequestBody dbkaryawan db,@PathVariable int id) {
        db.setId(id);
        a.save(db);
        return db;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("employee/detail/{id}")
    public List<dbkaryawan>  listemployeedetail(@PathVariable int id) {
        return (List<dbkaryawan>) a.findFirstByIdIs(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("employee/delete/{id}")
    public String employeedeleteinformation(@PathVariable("id") long id) {
        a.deleteById((int) id);
        String b = "1";
        return b;
    }
}