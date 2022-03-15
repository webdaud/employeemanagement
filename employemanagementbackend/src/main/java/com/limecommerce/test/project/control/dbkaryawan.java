package com.limecommerce.test.project.control;
import javax.persistence.*;

@Entity
@Table(name = "karyawan")
public class dbkaryawan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = true,length = 255)
    private String username;
    @Column(nullable = true,length = 255)
    private String firstname;
    @Column(nullable = true,length = 255)
    private String lastname;
    @Column(nullable = true,length = 255)
    private String email;
    @Column(nullable = true,length = 255)
    private String birthdate;
    @Column(nullable = true,length = 255)
    private String basicsalary;
    @Column(nullable = true,length = 255)
    private String status;
    @Column(nullable = true,length = 255)
    private String groupkaryawan;
    @Column(nullable = true,length = 255)
    private String description;
    @Column(nullable = true,length = 255)
    private String createdat;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getBasicsalary() {
        return basicsalary;
    }

    public void setBasicsalary(String basicsalary) {
        this.basicsalary = basicsalary;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getGroupkaryawan() {
        return groupkaryawan;
    }

    public void setGroupkaryawan(String groupkaryawan) {
        this.groupkaryawan = groupkaryawan;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreatedat() {
        return createdat;
    }

    public void setCreatedat(String createdat) {
        this.createdat = createdat;
    }
}
