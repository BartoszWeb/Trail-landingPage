import { signOut } from "next-auth/react";

export const logOutHandler = () => {
    signOut();
    window.location = "./"
};