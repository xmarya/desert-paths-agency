import Button from "./Button";
import { useForm } from "react-hook-form";
import { Form, FormRow } from "./Form";
import dictionary from "../dictionary/dictionary";
import sendEmail from "../api/sendEmail";
import { Spinner } from "./Spinner";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function ContactForm({ language }: { language: "ar" | "en" }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    contact: { form }} = dictionary[language];
  const { nameLabel, emailLabel,subjectLabel, messageLabel, button, success, error } = form;
  const {
    register,
    reset,
    handleSubmit,
    formState: { isLoading, isSubmitting, isDirty, isValid },
  } = useForm<{ name: string; email: string; subject:string, message: string }>({ mode: "onBlur" });

  const formSubmit = handleSubmit(async () => {
    if(!formRef) return ;
    try {
      const result = await sendEmail(formRef as React.RefObject<HTMLFormElement>);

      result.status === 200 ? toast.success(success) : toast.error(error);
      reset();
    } catch (error) {
      toast.error("Error, Refresh the page and try again")
    }
      

    
  });

  return (
    <Form ref={formRef} onSubmit={formSubmit}>
      <FormRow>
        <label htmlFor="name">{nameLabel}</label>
        <input style={{ ...(language === "en" && { direction: "ltr" }) }} type="text" required id="name" {...register("name")} disabled={isLoading} />
      </FormRow>
      <FormRow>
        <label htmlFor="email">{emailLabel}</label>
        <input style={{ ...(language === "en" && { direction: "ltr" }) }} type="email" required id="email" {...register("email")} disabled={isLoading} />
      </FormRow>
      <FormRow>
        <label htmlFor="subject">{subjectLabel}</label>
        <input style={{ ...(language === "en" && { direction: "ltr" }) }} type="text" required id="subject" {...register("subject")} disabled={isLoading} />
      </FormRow>
      <FormRow>
        <label htmlFor="message">{messageLabel}</label>
        <textarea style={{ ...(language === "en" && { direction: "ltr" }) }} required id="message" {...register("message")} disabled={isLoading} />
      </FormRow>
      <FormRow>
        <Button type="submit" disabled={!isDirty || !isValid}>
          {isSubmitting ? <Spinner /> : button}
        </Button>
      </FormRow>
    </Form>
  );
}
