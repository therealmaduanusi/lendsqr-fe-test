import Login from "./pages/Login";
import { useState } from "react";

import DashBoard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import PersonalDetails from "./components/PersonalDetails";
import UserInfo from "./components/UserInfo";
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

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void {
    e.preventDefault();
    // Handle form submission logic here
    if (login.email === "" || login.password === "") {
      console.error("Email and password are required.");
      return;
    }
    if (login.email.length > 0 && login.password.length > 0) {
      // console.log("Form submitted with:", login);
      setShowDashboard(true);
    }
  }
  return (
    <>
      {showDashboard ? (
        <Routes>
          <Route path="/" element={<DashBoard onShowDashboard={setShowDashboard} />}>
            <Route index element={<p style={{textAlign: 'center', width: '70%', alignSelf: 'center'}}>Hello</p>}></Route>
            <Route path="/users" element={<PersonalDetails />}>
              <Route index element={<UserInfo />}></Route>
              <Route path="general" element={<UserInfo />}></Route>
              <Route path="document" element={<p>No Data in 'Document'</p>}></Route>
              <Route path="bank" element={<p>No Data in 'Bank'</p>}></Route>
              <Route path="loan" element={<p>No Data in 'Loan'</p>}></Route>
              <Route path="savings" element={<p>No Data in 'Savings'</p>}></Route>
              <Route path="app" element={<p>No Data in 'App and System'</p>}></Route>
            </Route>
            <Route path="/guarantors" element={<Users />}></Route>
            <Route path="/loans" element={<p>Loan No Data found</p>}></Route>
            <Route path="/decisionModels" element={<p>Decision Models No Data Found</p>}></Route>
            <Route path="/savings" element={<p>No Data Found</p>}></Route>
            <Route path="/loanrequests" element={<p>Decision Models No Data Found</p>}></Route>
            <Route path="/whitelist" element={<p>Whitelist No Data Found</p>}></Route>
            <Route path="/karma" element={<p>Karma No Data Found</p>}></Route>
          </Route>
        </Routes>
      ) : (
        <Login login={login} onChange={handleChange} onSubmit={handleSubmit} />
      )}
    </>
  );
}

export default App;
