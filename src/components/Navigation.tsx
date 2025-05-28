import { Link } from "react-router-dom";
import briefcase from "../assets/briefcase1.svg";
import homeImage from "../assets/home1.svg";

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
function Navigation() {
  return (
    <nav className="navigation">
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
      </ul>
    </nav>
  );
}

type CustomersListsProps = {
  img: string;
  name: string;
};

const CustomersLists = ({ img, name }: CustomersListsProps) => {
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
