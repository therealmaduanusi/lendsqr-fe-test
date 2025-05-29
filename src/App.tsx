import Login from "./pages/Login";
import { useState } from "react";

import DashBoard from "./pages/Dashboard";
function App() {
  interface LoginState {
    email: string;
    password: string;
  }
  const [login, setLogin] = useState({ email: "", password: "" });
  const [showDashboard, setShowDashboard] = useState<boolean>(false);

  interface ChangeEventTarget extends EventTarget {
    name?: string;
    value?: string;
  }

  interface ChangeEvent extends React.FormEvent<HTMLInputElement> {
    target: ChangeEventTarget;
  }

  function handleChange(e: ChangeEvent): void {
    // to avoid TypeScript errors
    if (typeof e.target.name !== "string" || typeof e.target.value !== "string")
      return;
    // Update the login state with the new value
    const { name, value } = e.target;
    setLogin((prev: LoginState) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // Handle form submission logic here
    if (login.email === "" || login.password === "") {
      console.error("Email and password are required.");
      return;
    }
    if (login.email.length > 0 && login.password.length > 0) {
      console.log("Form submitted with:", login);
      setShowDashboard(true);
    }
  }
  return (
    <>
      {showDashboard ? (
        <DashBoard />
      ) : (
        <Login login={login} onChange={handleChange} onSubmit={handleSubmit} />
      )}
    </>
  );
}

export default App;
