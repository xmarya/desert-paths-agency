import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--section-vertical-space);
  margin: 0 auto;
`;

export default function AppLayout() {
  return (
    <>
      <Header/>
      <Layout>
        <Outlet />
      </Layout>
      {/* <Footer/> */}
    </>
  );
}
