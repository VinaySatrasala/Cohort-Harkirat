import { atom } from "recoil";

export const todoAtom = atom({
    key : "todoAtom",
    default :[{
        title : "Go to GYM",
        description : "From 7 to 8 AM"
    }]
});