"use client";
import { Input } from "@/components/Input";
import { Spinner } from "@/components/Spinner";
import { TextAreaInput } from "@/components/TextAreaInput";
import { object } from "@/util/validation";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";

export const EmailForm = () => {
  const [emailData, setEmailData] = useState<{ [k: string]: string }>({
    name: "",
    phoneNumber: "",
    service: "",
    msg: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({
    name: "",
    phoneNumber: "",
    service: "",
    msg: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validate = useCallback(() => {
    const userSchema = object({
      name: ["string", "required"],
      phoneNumber: ["string", "required"],
      service: ["string", "required"],
      msg: ["string", "required"],
    });
    const result = userSchema.validate(emailData);
    setErrors(
      result.errors || {
        name: "",
        phoneNumber: "",
        service: "",
        msg: "",
      }
    );
    setTimeout(() => {
      setErrors({
        name: "",
        phoneNumber: "",
        service: "",
        msg: "",
      });
    }, 2000);
    return result.valid;
  }, [emailData]);

  const sendAction = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      if (validate()) {
        setIsLoading(true);
        try {
          const response = await fetch("/api/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailData }),
          });

          const result = await response.json();
          if (response.ok) {
            setIsLoading(false);
            setEmailData({
              name: "",
              phoneNumber: "",
              service: "",
              msg: "",
            });
          }
        } catch (err) {
          setErrors({
            name: "Something Went Wrong",
            phoneNumber: "",
            service: "",
            msg: "",
          });
          setTimeout(() => {
            setErrors({
              name: "",
              phoneNumber: "",
              service: "",
              msg: "",
            });
          }, 2000);
          setIsLoading(false);
        }
      }
    },
    [emailData]
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setEmailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={sendAction} className="flex flex-col gap-y-5 w-full">
      <Input
        placeholder="الاسم كامل"
        id="name"
        name="name"
        onChange={handleChange}
        value={emailData?.name}
        error={errors?.name}
      />
      <Input
        id="phone-number"
        name="phoneNumber"
        onChange={handleChange}
        value={emailData?.phoneNumber}
        placeholder="رقم الهاتف"
        error={errors?.phoneNumber}
      />
      <Input
        id="service"
        name="service"
        onChange={handleChange}
        value={emailData?.service}
        placeholder="الخدمة المطلوبة"
        error={errors?.service}
      />
      <TextAreaInput
        id="message-note"
        name="msg"
        onChange={handleChange}
        value={emailData?.msg}
        placeholder="رسالتك أو ملاحظتك"
        error={errors?.msg}
      />
      <button
        type="submit"
        className="w-full text-lg text-white bg-[#ED2025] rounded-[15px] py-2"
      >
        {isLoading ? <Spinner /> : "ارسل طلبك"}
      </button>
      <div className="text-[#ED2025] -mt-2">
        {(errors.name || errors.phoneNumber || errors.service) &&
          "جميع الحقول مطلوبة, يرجى التأكد من صحة الباينات المدخلة"}
      </div>
    </form>
  );
};
