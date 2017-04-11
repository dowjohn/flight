package com.cooksys.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Peep")
public class User {

    @Id
    @GeneratedValue
    private long id;

    private String username;

    private String password;

    private String bookedFlights;

    public User() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBookedFlights() {
        return bookedFlights;
    }

    public void setBookedFlights(String bookedFlights) {
        this.bookedFlights = bookedFlights;
    }
}
