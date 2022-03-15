package com.limecommerce.test.project.auth;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface crudauthinterface extends CrudRepository<dbuser, Integer> {
    Optional<dbuser> findFirstByEmailEqualsAndPasswordEquals(String email, String password);
}