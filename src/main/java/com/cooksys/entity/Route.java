package com.cooksys.entity;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Route {
	@Id
    @GeneratedValue
    private long id;
	
	@ManyToOne
	private User author;
	
	@OneToMany(mappedBy="route")
	private ArrayList<FlightBookable> flights;

	public Route() {}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public User getAuthor() {
		return author;
	}

	public void setAuthor(User author) {
		this.author = author;
	}

	public ArrayList<FlightBookable> getFlights() {
		return flights;
	}

	public void setFlights(ArrayList<FlightBookable> flights) {
		this.flights = flights;
	}
	
	
}
