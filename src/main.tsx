import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("No container found");
}
createRoot(container).render(<App />);
