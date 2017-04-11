package com.cooksys.repository;

import com.cooksys.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Object findByUsernameAndPassword(String username, String password);
}
