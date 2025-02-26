export const firstNameErrorCheck = (firstName: string) => {
    let errorMsg = ''

    if(firstName === '') {
        errorMsg = "First name is required!"
    } else if(firstName.length < 2) {
        errorMsg = "First name must be at least 2 characters long!"
    }

    return errorMsg
}

export const lastNameErrorCheck = (lastName: string) => {
    let errorMsg = ''

    if(lastName === '') {
        errorMsg = "Last name is required!"
    } else if(lastName.length < 2) {
        errorMsg = "Last name must be at least 2 characters long!"
    }

    return errorMsg
}

export const emailErrorCheck = (email: string) => {
    let errorMsg = ''

    if(email === '') {
        errorMsg = "Email is required!"
    }

    return errorMsg
}

export const passwordErrorCheck = (password: string) => {
    let errorMsg = ''
    const regex:RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,128}$/

    if(password === '') {
        errorMsg = 'Password is required!'
    } else if(!regex.test(password)) {
        errorMsg = "Password must meet the following criteria: "
            + "Between 8-128 characters, "
            + "at least one uppercase letter, "
            + "one lowercase letter, one digit, "
            + "and one special character."
    }

    return errorMsg
}

export const confirmPasswordErrorCheck = (confirmPassword: string, password: string) => {
    let errorMsg = ''

    if(confirmPassword === '') {
        errorMsg = "Confirm password is required!"
    } else if(!(confirmPassword === password)) {
        errorMsg = "Confirm password must match password!"
    }

    return errorMsg
}