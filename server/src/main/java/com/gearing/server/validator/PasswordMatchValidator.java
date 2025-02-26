package com.gearing.server.validator;

import com.gearing.server.validation.PasswordMatch;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.BeanWrapperImpl;

public class PasswordMatchValidator implements ConstraintValidator<PasswordMatch, Object> {
    private String password;
    private String confirmPassword;

    @Override
    public void initialize(PasswordMatch constraintAnnotation) {
        this.password = constraintAnnotation.password();
        this.confirmPassword = constraintAnnotation.confirmPassword();
    }

    @Override
    public boolean isValid(Object obj, ConstraintValidatorContext context) {
        Object password = new BeanWrapperImpl(obj).getPropertyValue("password");
        Object confirmPassword = new BeanWrapperImpl(obj).getPropertyValue("confirmPassword");
        boolean isValid = password != null && password.equals(confirmPassword);

        if (!isValid) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(context.getDefaultConstraintMessageTemplate())
                    .addPropertyNode("confirmPassword").addConstraintViolation();
        }
        return isValid;
    }
}
