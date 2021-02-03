export type Action =
    | { type: 'ADD'; add: any }
    | { tpye: 'DEL'; del: any }
    | { type: 'COMPLETE'; complete: any }
    | { type: 'UNCOMPLETE'; uncomplete: any }
    | { type: 'EDIT'; edit: any }

export const ADD = "add";
export const DEL = "del";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";
export const EDIT = "edit";