import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ReactGA from "react-ga4";

import theme from "./styles/theme.ts";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Gallery from "./pages/Gallery.tsx";

import { SmoothScrollWrapper } from "./components/SmoothScrollWrapper/SmoothScrollWrapper.tsx";

import {
  PAHT_ABOUT,
  PAHT_CONTACT,
  PAHT_HOME,
  PAHT_PROJECTS,
  PAHT_PROJECTS_DETAIL,
} from "./constants/routes.ts";

const router = createBrowserRouter([
  {
    path: PAHT_HOME,
    element: <Home />,
  },
  {
    path: PAHT_CONTACT,
    element: <Contact />,
  },
  {
    path: PAHT_ABOUT,
    element: <About />,
  },
  {
    path: PAHT_PROJECTS,
    element: <Projects />,
  },
  {
    path: PAHT_PROJECTS_DETAIL,
    element: <Gallery />,
  },
]);

const App = () => {
  ReactGA.initialize(import.meta.env.VITE_GA);

  return (
    <ThemeProvider theme={theme}>
      <SmoothScrollWrapper>
        <RouterProvider router={router} />
      </SmoothScrollWrapper>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
