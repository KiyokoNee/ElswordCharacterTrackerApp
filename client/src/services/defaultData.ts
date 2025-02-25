import {ChangeTracker, CharacterSlot, Errors} from "./interfaces.ts";

export const defaultErrors: Errors = {
    nickname: '',
    characterName: '',
    role: '',
    roleId: '',
    stage: ''
}

export const defaultCharacterData: CharacterSlot = {
    nickname: "",
    characterName: "",
    role: "",
    roleId: "",
    stage: "In Progress"
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