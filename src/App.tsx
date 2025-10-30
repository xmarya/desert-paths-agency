import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { LanguageProvider } from "./helpers/hooks/LanguageContext";
import Home from "./pages/Home";
import OurPolicies from "./pages/OurPolicies";

// An array of Route objects with nested routes on the children property.
const router = createBrowserRouter([
  {
    element: (
      <LanguageProvider>
        <AppLayout />
      </LanguageProvider>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-policies", element: <OurPolicies /> },
    ],
  },
]);
export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            backgroundColor: "var(--colour-accent-dark-green)",
            color: "var(--colour-offWhite)",
            fontSize: "1.6rem",
            fontFamily: "var(--font-paragraph)",
            maxWidth: "50rem",
            padding: "1.6rem 2.4rem",
          },
        }}
      />
    </HelmetProvider>
  );
}
