import { Outlet, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import { useEffect } from "react";
import navigateToSection from "../helpers/navigateToSection";
import Footer from "./Footer";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--section-mb);
  margin: 0 auto;
`;

export default function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.slice(1);
      const section = document.getElementById(sectionId);
      if (section) navigateToSection(sectionId);
    }
  }, [location]);

  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </>
  );
}
