package com.limecommerce.test.project.control;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Set;

public interface crudinterface extends CrudRepository<dbkaryawan, Integer> {
    dbkaryawan findFirstByIdIs(Integer id);

    List<Integer> deleteByIdIs(Integer id);


}
