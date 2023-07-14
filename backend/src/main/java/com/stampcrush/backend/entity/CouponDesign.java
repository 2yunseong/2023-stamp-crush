package com.stampcrush.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;

import static jakarta.persistence.GenerationType.IDENTITY;

@Getter
@Entity
public class CouponDesign extends BaseDate {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String frontImageUrl;

    private String backImageUrl;

    private String stampImageUrl;
}
