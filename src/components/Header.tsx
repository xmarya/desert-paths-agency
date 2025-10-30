import { NavLink } from "react-router-dom";
import Logo from "../UI/Logo";
import StyledHeader from "../UI/StyledHeader";
import { LanguageContext } from "../helpers/hooks/LanguageContext";
import { useContext } from "react";
import Navigation from "./Navigation";
import LanguageButton from "../UI/LanguageButton";

export default function Header() {
  const {language, switchLanguage} = useContext(LanguageContext);
  return (
    <StyledHeader id="home-top">
      <NavLink to="/#home-top"><Logo /></NavLink>
      <Navigation language={language} />
      <LanguageButton language={language} switchLanguage={switchLanguage} />
    </StyledHeader>
  );
}
