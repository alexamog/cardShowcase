import "./styles.css";
import CreateCard from "./CreateCard";
import CardShowcase from "./CardShowcase";
import { Router, Outlet, ReactLocation } from "@tanstack/react-location";
import { useState, createContext, useContext } from "react";

const location = new ReactLocation();

// const FormDataContext = createContext();

// export const useFormData = () => {
//   const context = useContext(FormDataContext);
//   return context;
// };

export default function App() {
  const routes = [
    {
      path: "/",
      element: <CreateCard />,
    },
    {
      path: "showcase",
      element: <CardShowcase />,
    },
  ];

  return (
    <Router routes={routes} location={location}>
      {/* <FormDataContext.Provider value={{ formData, setFormData }}> */}
      <Outlet />
      {/* </FormDataContext.Provider> */}
    </Router>
  );
}
