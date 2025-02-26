package com.gearing.server.validation;

import com.gearing.server.validator.PasswordMatchValidator;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Constraint(validatedBy = PasswordMatchValidator.class)
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface PasswordMatch {
    String password();
    String confirmPassword();
    String message() default "Password must match confirm password!";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};

    @Target({ElementType.TYPE})
    @Retention(RetentionPolicy.RUNTIME)
    @interface List {
        PasswordMatch[] value();
    }
}
