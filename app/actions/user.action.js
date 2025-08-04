
"use server"
import { createSessionClient, createAdminClient } from "@/lib/appwrite";
import { parseStringify } from "@/lib/utils";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";

  

export const SignUp = async(email, password, firstName, lastName) => {

  
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(ID.unique(), email, password, firstName + " " + lastName);

    const session = await account.createEmailPasswordSession(email, password);
  
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
  } catch (error) {
    return null;
  }
  return parseStringify(newUserAccount);
}



export const SignIn = async(values) => {

   

// ... your initilization functions
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user = await account.get();
      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }
  