import React from "react";
import { Contacts } from "./Contacts";
import { EmailForm } from "./EmailForm";

export const ContactSection = () => {
  return (
    <div
      id="contacts"
      className="flex flex-col gap-y-12 items-center py-16 md:px-16 px-8"
    >
      <div className="text-primeColor text-2xl">تواصل معنا</div>
      <div className="w-full gap-y-6 grid md:grid-cols-2 grid-cols-1">
        <Contacts />
        <EmailForm />
      </div>
    </div>
  );
};
