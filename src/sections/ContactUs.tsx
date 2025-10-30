import dictionary from "../dictionary/dictionary";
import ContactForm from "../UI/ContactForm";
import { SectionHeading, SectionSubHeading } from "../UI/Headings";
import Section from "../UI/Section";

export default function ContactUs({language}:{language: "ar" | "en"}) {
  const {contact:{mainHeading, subHeading}} = dictionary[language];
  return (
    <Section id="contact-us" style={{ ...(language === "en" && {direction:"ltr"}), containerType: "inline-size",display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--contents-gap)" }}>
      <div>
        <SectionHeading>{mainHeading}</SectionHeading>
        <SectionSubHeading>{subHeading}</SectionSubHeading>
      </div>
      <ContactForm language={language}/>
    </Section>
  );
}
