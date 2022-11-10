import React from 'react';
import {redirect} from "react-router-dom";
import {deleteContact} from "../contacts";

export async function action({params}) {
    throw new Error("oh noes!");
    await deleteContact(params.contactId);
    return redirect("/");
}