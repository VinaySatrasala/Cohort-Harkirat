import { atom, selector } from "recoil";

export const homeAtom = atom({
    key : "homeAtom",
    default: 0
});

export const networkAtom = atom({
    key : "networkAtom",
    default : 99
});

export const jobsAtom = atom({
    key : "jobsAtom",
    default : 0
});

export const messageAtom = atom({
    key : "messageAtom",
    default : 0
});


export const totalNotifications = selector({
    key : "total",
    get : ({get}) =>{
        return get(homeAtom) + get(networkAtom) + get(jobsAtom) + get(messageAtom);
    }
});