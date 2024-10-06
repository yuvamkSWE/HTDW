import React from "react";
import ReactDOMClient from "react-dom/client";
import { Contacts } from "./Contacts";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Contacts />);
