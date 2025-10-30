import { useEffect } from "react";
import { createContext } from "react";
import useLocalStorage from "./useLocalStorage";


type ContextProps = {
    language: "ar" | "en",
    switchLanguage:()=> void
}
const LanguageContext = createContext<ContextProps>({} as ContextProps);


/*
Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
*/
function LanguageProvider({ children }:{children:React.ReactNode}) {
  const {storageValue:language, setStorageValue:setLanguage} = useLocalStorage("ar", "language");

  useEffect(() => {
    // documentElement is the html tag.
    if (language === "ar") {
      document.documentElement.classList.add("ar");
      document.documentElement.classList.remove("en");
    } else {
      document.documentElement.classList.add("en");
      document.documentElement.classList.remove("ar");
    }

  }, [language]);

  function switchLanguage() {
    setLanguage((current:string) => (current === "en" ? "ar" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export {LanguageProvider, LanguageContext};
