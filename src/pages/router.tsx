import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Cheatsheet from "./cheatsheet";
import More from "./more";
import MoreInfo from "./more/info";

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/cheatsheet" />} />
      <Route path="/" element={<AppLayout />}>
        <Route path="cheatsheet" element={<Cheatsheet />} />
        <Route path="more" element={<More />} />
        <Route path="more/info" element={<MoreInfo />} />
      </Route>
    </>
  )
);

export default router2;
