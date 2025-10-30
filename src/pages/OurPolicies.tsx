import { useContext } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import dictionary from "../dictionary/dictionary";
import { LanguageContext } from "../helpers/hooks/LanguageContext";
import ArabicOurPolicies from "../UI/ArabicOurPolicies";
import EnglishOurPolicies from "../UI/EnglishOurPolicies";

export default function OurPolicies() {
  const { language } = useContext(LanguageContext);
  const {
    metadata: { policies },
  } = dictionary[language];

  
  return (
    <>
      <Helmet key={language}>
        <title>{policies.title}</title>
        <meta name="lang" content={language} />
        <meta name="description" content={policies.description} />
        <meta name="generator" content={policies.generator} />
        <meta name="creator" content={policies.creator} />
        <meta name="publisher" content={policies.publisher} />
        <meta name="mobile-web-app-capable" content={policies["mobile-web-app-capable"]} />
        <meta name="apple-mobile-web-app-title" content={policies["apple-mobile-web-app-title"]} />
        <meta name="apple-mobile-web-app-status-bar-style" content={policies["apple-mobile-web-app-status-bar-style"]} />
        <meta property="og:title" content={policies["og:title"]} />
        <meta property="og:description" content={policies["og:description"]} />
      </Helmet>

      {language === "ar" ? <ArabicOurPolicies /> : <EnglishOurPolicies />}
    </>
  );
}
