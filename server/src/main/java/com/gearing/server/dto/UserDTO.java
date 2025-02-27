package com.gearing.server.dto;

public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private Long mainId;

    public UserDTO() {}

    public UserDTO(Long id, String firstName, String lastName, Long mainId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mainId = mainId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Long getMainId() {
        return mainId;
    }

    public void setMainId(Long mainId) {
        this.mainId = mainId;
    }
}
