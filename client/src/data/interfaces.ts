export interface CharacterSlot {
    id: bigint
    nickname: string,
    characterName: string,
    role: string,
    roleId: string,
    stage: "Lvl 99" | "3rd Job" | "In Progress" | "Master Class"
}

export interface UserData {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface LoginUserData {
    email: string,
    password: string
}

export interface Errors {
    nickname: string,
    characterName: string,
    role: string,
    roleId: string
    stage: string
}

export interface UserErrors {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface ChangeTracker {
    nickname: boolean,
    characterName: boolean,
    role: boolean,
    roleId: boolean
}

export interface UserChangeTracker {
    firstName: boolean,
    lastName: boolean,
    email: boolean,
    password: boolean,
    confirmPassword: boolean
}