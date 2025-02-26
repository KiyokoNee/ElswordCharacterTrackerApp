import {
    ChangeTracker,
    CharacterSlot,
    Errors,
    UserData,
    UserErrors,
    LoginUserData,
    UserChangeTracker
} from "./interfaces.ts";

export const defaultErrors: Errors = {
    nickname: '',
    characterName: '',
    role: '',
    roleId: '',
    stage: ''
}

export const defaultUserErrors: UserErrors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const defaultCharacterData: CharacterSlot = {
    nickname: "",
    characterName: "",
    role: "",
    roleId: "",
    stage: "In Progress"
}

export const defaultRegisterUserData: UserData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const defaultLoginUserData: LoginUserData = {
    email: '',
    password: '',
}

export const defaultChangeTracker: ChangeTracker = {
    nickname: false,
    characterName: false,
    role: false,
    roleId: false
}

export const editChangeTracker: ChangeTracker ={
    nickname:true,
    characterName: true,
    role: true,
    roleId: true
}

export const defaultRegisterChangeTracker: UserChangeTracker = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false
}