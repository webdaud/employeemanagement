package com.limecommerce.test.project;
import com.limecommerce.test.project.auth.crudauthinterface;
import com.limecommerce.test.project.auth.dbuser;
import com.limecommerce.test.project.control.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class restroutertest {
    @Autowired private crudinterface a;
    @Autowired private crudauthinterface b;
    @Test
    public void testAdd(){
//        for (int i=0;i>=100;i++){
//            dbkaryawan karyawan[i] = new dbkaryawan();
//            karyawan.setUsername("usernamekaryawan");
//            karyawan.setFirstname("firstnamekaryawan");
//            karyawan.setLastname("lastnamekaryawan");
//            karyawan.setEmail("emailkaryawan");
//            karyawan.setBirthdate("birthdatekaryawan");
//            karyawan.setBirthdate("basicsalarykaryawan");
//            karyawan.setStatus("statuskaryawan");
//            karyawan.setGroupkaryawan("groupkaryawan");
//            karyawan.setDescription("deskripsikaryawan");
//            karyawan.setCreatedat("created_at");
//            a.save(karyawan[i]);
//        }
            dbuser auth= new dbuser();
            auth.setEmail("usernamekaryawan");
            auth.setPassword("firstnamekaryawan");
            b.save(auth);


    }
    @Test
    public void testGet(){
    }
}
