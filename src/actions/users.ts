"use server"
import { createClient } from "@/auth/server";
import { handleError} from "@/lib/utils";

export const loginAction = async (email: string, password: string) => {
    try {
        const {auth}= await createClient();
        const {error} = await auth.signInWithPassword({
            email,
            password
        });
        if (error) {
            throw new Error(error.message);
        }
        return {error: null};

    } catch (error) {
        handleError(error);
    }
}

export const logOutAction = async () => {
    try {
        const {auth}= await createClient();
        const {error} = await auth.signOut();
        if (error) {
            throw new Error(error.message);
        }
        return {error: null};

    } catch (error) {
        handleError(error);
    }
}

export const signupAction = async (email: string, password: string) => {
    try {
        const {auth}= await createClient();
        const {data, error} = await auth.signUp({
            email,
            password
        });
        if (error) {
            throw new Error(error.message);
        }

        const userId = data.user?.id
        if (!userId) {
            throw new Error("User ID not found");
        }

        return {error: null};

    } catch (error) {
        handleError(error);
    }
}