import { Link, NavLink } from "react-router-dom";
import briefcase from "../assets/briefcase1.svg";
import homeImage from "../assets/home1.svg";
import { useState } from "react";

// This component renders the navigation sidebar for the application
const customersLists: { id: number; name: string; img: string }[] = [
  { id: 1, name: "User", img: "/images/user.svg" },
  { id: 2, name: "Guarantors", img: "/images/guarantors.svg" },
  { id: 3, name: "Loans", img: "/images/loans.svg" },
  { id: 4, name: "Decision Models", img: "/images/decision_models.svg" },
  { id: 5, name: "Savings", img: "/images/savings.svg" },
  { id: 6, name: "Loan Requests", img: "/images/loan_requests.svg" },
  { id: 7, name: "Whitelist", img: "/images/whitelist.svg" },
  { id: 8, name: "Karma", img: "/images/karma.svg" },
];
const businessLists: { id: number; name: string; img: string }[] = [
  { id: 1, name: "Organization", img: "/images/orginizationbriefcase.svg" },
  { id: 2, name: "Loan Products", img: "/images/loan_requests.svg" },
  { id: 3, name: "Savings Products", img: "/images/savings_products.svg" },
  { id: 4, name: "Fees and Charges", img: "/images/feesandcharges.svg" },
  { id: 5, name: "Transactions", img: "/images/transaction.svg" },
  { id: 6, name: "Services", img: "/images/services.svg" },
  { id: 7, name: "Service Account", img: "/images/serviceaccount.svg" },
  { id: 8, name: "Settlements", img: "/images/settlements.svg" },
  { id: 9, name: "Reports", img: "/images/reports.svg" },
];
const settingsLists: { id: number; name: string; img: string }[] = [
  { id: 1, name: "Preferences", img: "/images/preference.svg" },
  { id: 2, name: "Fees and Pricing", img: "/images/feesandprice.svg" },
  { id: 3, name: "Audit Logs", img: "/images/auditlogs.svg" },
  { id: 4, name: "Systems Messages", img: "/images/systems_messages.svg" },
];

function Navigation() {
  const [ showNavigation, setShowNavigation ] = useState(false)
  return (
    <>
      <div onClick={() => setShowNavigation(prev => !prev)} className="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`navigation ${showNavigation ? 'show' : 'hide'}`}>
        <ul className="navigation-list">
          <li className="navigation-select">
            <img src={briefcase} alt="Select Organization" />
            <select name="navigation" id="navigation">
              <option value="">Switch Organization</option>
              <option value="about">About</option>
              <option value="services">Services</option>
              <option value="contact">Contact</option>
            </select>
          </li>
          <li className="navigation-dashboard">
            <img src={homeImage} alt="Dashboard" />
            <Link to="/dashboard">
              <p>Dashboard</p>
            </Link>
          </li>
          <h3 className="customers-title">Customers</h3>
          {customersLists.map((customer) => (
            <CustomersLists key={customer.id} {...customer} />
          ))}
          <h3 className="business-title">Business</h3>
          {businessLists.map((customer) => (
            <BusinessLists key={customer.id} {...customer} />
          ))}
          <h3 className="settings-title">Settings</h3>
          {settingsLists.map((customer) => (
            <SettingsLists key={customer.id} {...customer} />
          ))}
        </ul>
      </nav>
    </>
  );
}

type CustomersListsProps = {
  img: string;
  name: string;
};

// This component renders a list item for each customer in the navigation
const CustomersLists = ({ img, name }: CustomersListsProps) => {
  return (
    <li className="navigation-customers">
      <img src={img} alt={name} />
      <NavLink to={name}>
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

type BusinessListsProps = {
  img: string;
  name: string;
};
// This component renders a list item for each business in the navigation
const BusinessLists = ({ img, name }: BusinessListsProps) => {
  return (
    <li className="navigation-customers">
      <img src={img} alt={name} />
      <Link to="#">
        <span>{name}</span>
      </Link>
    </li>
  );
};

type SettingsListsProps = {
  img: string;
  name: string;
};
// This component renders a list item for each setting in the navigation
const SettingsLists = ({ img, name }: SettingsListsProps) => {
  return (
    <li className="navigation-customers">
      <img src={img} alt={name} />
      <Link to="#">
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default Navigation;
