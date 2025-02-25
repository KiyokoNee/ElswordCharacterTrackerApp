export interface CharacterSlot {
    nickname: string,
    characterName: string,
    role: string,
    roleId: string,
    stage: "Lvl 99" | "3rd Job" | "In Progress" | "Master Class"
}

export interface Errors {
    nickname: string,
    characterName: string,
    role: string,
    roleId: string
}

export interface ChangeTracker {
    nickname: boolean,
    characterName: boolean,
    role: boolean,
    roleId: boolean
}

export interface character {
    id: bigint,
    nickname: String,
    characterName: String,
    role: String,
    roleId: String,
    stage: String
}