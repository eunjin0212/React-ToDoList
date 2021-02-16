export type Action = {
    type: typeof ADD | typeof DEL | typeof COMPLETE | typeof UNCOMPLETE;
    payload: string;
} | {
    type: typeof EDIT;
    payload: string;
    id: string;
}


export const ADD = "ADD";
export const DEL = "DEL";
export const COMPLETE = "COMPLETE";
export const UNCOMPLETE = "UNCOMPLETE";
export const EDIT = "EDIT";