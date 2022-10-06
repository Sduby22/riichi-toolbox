import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Calculator from "./calculator";
import DiscardPage from "./calculator/discard";
import Cheatsheet from "./cheatsheet";
import Home from "./home";
import More from "./more";
import About from "./more/about";
import AttributionPage from "./more/info.attribution";
import SettingsPage from "./more/settings";

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/cheatsheet" />} />
      <Route path="/" element={<AppLayout />}>
        <Route path="cheatsheet" element={<Cheatsheet />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="calculator/discard" element={<DiscardPage />} />
        <Route path="home" element={<Home />} />
        <Route path="more" element={<More />} />
        <Route path="more/about" element={<About />} />
        <Route path="more/about/attribution" element={<AttributionPage />} />
        <Route path="more/settings" element={<SettingsPage />} />
      </Route>
    </>
  )
);

export default router2;
