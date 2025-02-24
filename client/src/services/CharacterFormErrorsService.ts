export const nicknameErrorCheck = (nickname:string) => {
    let errorMsg = ''

    if(nickname === '') {
        errorMsg = "Nickname is required!"
    } else if(nickname.length < 6 || nickname.length > 12) {
        errorMsg = "Nickname must be between 6 and 12 characters long!"
    }

    return errorMsg
}

export const characterErrorCheck = (characterName: string) => {
    let errorMsg = ''

    if(characterName === '') {
        errorMsg = "Character name is required!"
    } else if(characterName.length < 6 || characterName.length > 12) {
        errorMsg = "Character name must be between 3 and 7 characters long!"
    }

    return errorMsg
}

export const roleErrorCheck = (role:string) => {
    let errorMsg = ''

    if(role === '') {
        errorMsg = "Class is required!"
    } else if(role.length < 5) {
        errorMsg = "Class must be at least 5 characters long!"
    }

    return errorMsg
}

export const roleIdErrorCheck = (roleId:string) => {
    let errorMsg = ''

    if(roleId === '') {
        errorMsg = "Class code is required!"
    } else if(roleId.length < 2 || roleId.length > 4) {
        errorMsg = "Class code must be between 2 and 4 characters long!"
    }

    return errorMsg
}