package com.RegIT.RegIT.Backend.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collation = "Consultation")
public class Consultation {
    @Id
    private String id;
    private String name;
    private String contactWay;
    private String massage;
}
