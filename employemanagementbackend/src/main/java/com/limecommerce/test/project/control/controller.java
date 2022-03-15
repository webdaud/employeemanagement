package com.limecommerce.test.project.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class controller {
    @Autowired private crudinterface a;
//    public List<listusermodel> listAll(){
//            return (List<listusermodel>) crud.findAll();
//    }
//    public List<listkaryawanmodel> listAllkaryawan(){
//            return (List<listkaryawanmodel>) karyawaninterface.findAll();
//    }
//    public listkaryawanmodel getdata(int id){
//        Optional<listkaryawanmodel>  result = karyawaninterface.findById(id);
//        return result.get();
//    }

    public static void update(dbkaryawan db) {
//        return crudinterface.save(db);
    }
//    public void listusersave(dbkaryawan a) {
//        return a.save;
//    }
//    public void listusersave(listusermodel user) {
//        a.save(user);
//    }
//    public void listkaryawansave(listkaryawanmodel karyawan) {
//        b.save(karyawan);
//    }
//    public listusermodel get(int id){
//        Optional<listusermodel>  result = crud.findById(id);
//        return result.get();
//    }
//    public listkaryawanmodel gets(int id){
//        Optional<listkaryawanmodel>  result = karyawaninterface.findById(id);
//        return result.get();
//    }
//    public void delete(int id){
//        a.deleteById(id);
//    }
}
