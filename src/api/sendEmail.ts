import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const TEMPLATE_ID = import.meta.env.VITE_CONTACT_US_TEMPLATE_ID;
async function sendEmail(formRef: React.RefObject<HTMLFormElement>) {
  return await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
}

export default sendEmail;
