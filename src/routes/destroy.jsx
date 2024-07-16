import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  try{
  await deleteContact(params.contactId);
  return redirect("/");
} catch (error) {
  throw new error("Failed to delete contact" + error.message);
  }
}

