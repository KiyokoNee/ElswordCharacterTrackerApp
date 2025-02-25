import {CharacterSlot, Errors} from "./interfaces.ts";

export const defaultErrors: Errors = {
    nickname: '',
    characterName: '',
    role: '',
    roleId: ''
}

export const defaultCharacterData: CharacterSlot = {
    nickname: "",
    characterName: "",
    role: "",
    roleId: "",
    stage: "In Progress"
}