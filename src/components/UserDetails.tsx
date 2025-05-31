import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import filterImage from "../assets/filter-results-button.svg";
import userDetailMenuImage from "../assets/userdetailmenu.svg";
import viewDetailsIcon from "../assets/viewdetails.svg";
import blacklistUserIcon from "../assets/blacklistuser.svg";
import activateUserIcon from "../assets/activateuser.svg";
import Loader from "./Loader.tsx";
import FilterForm from "./FilterForm.tsx";

type UserDetails = {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  date: string;
  status: string;
};

function UsersDetails() {
  const [usersDetails, setUsersDetails] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [storedUsersDetails, setStoredUsersDetails] = useState<UserDetails[]>(
    []
  );

  localStorage.setItem("usersDetails", JSON.stringify(usersDetails));
  console.log("storedUsersDetails", usersDetails);

  useEffect(() => {
    // Fetch user details or perform any side effects here
    async function fetchUserDetails() {
      const storedUsersDetails = JSON.parse(
        localStorage.getItem("usersDetails") || "{}"
      );
      console.log("Stored user details:", storedUsersDetails);

      try {
        setTimeout(async () => {
          const response = await axios.get("/api/users-api.json");
          const data = response.data;
          setUsersDetails(data);
          // if (storedUsersDetails) {
          const { users, total } = data;
          setStoredUsersDetails(users);
          console.log(
            "User details from localStorage:",
            users,
            "Total:",
            total
          );
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
    fetchUserDetails();
  }, []);
  // console.log('usersDetails', usersDetails);

  return (
    <div className="user-details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <UserTable storedUsersDetails={storedUsersDetails} />
        </>
      )}
    </div>
  );
}

const UserTable = ({
  storedUsersDetails,
}: {
  storedUsersDetails: UserDetails[];
}) => {
  const [showUserDetailMenu, setShowUserDetailMenu] = useState<number | null>(
    null
  );
  const [showFilterForm, setShowFilterForm] = useState<boolean>(false);
  const headerArray = [
    "Organization",
    "Username",
    "Email",
    "Phone Number",
    "Date Joined",
    "Status",
  ];
  return (
    <>
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              {headerArray.map((head) => (
                <th key={head}>
                  <div onClick={() => setShowFilterForm((prev) => !prev)} className="header-with-icon">
                    {head}
                    <span>
                      <img src={filterImage} alt="filter" />
                    </span>
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {storedUsersDetails.slice(0, 9).map((user: UserDetails) => (
              <Tablerow
                key={user.id}
                user={user}
                showUserDetailMenu={showUserDetailMenu}
                onSetShowUserDetailMenu={setShowUserDetailMenu}
              />
            ))}
            {showFilterForm && <FilterForm />}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <div className="select-container">
          <p>Showing</p>
          <select name="select" id="">
            {Array.from({ length: 500 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <p>out of {storedUsersDetails.length}</p>
        </div>
        <div className="pagination-buttons">
          <button className="prev-button">&lt;</button>
          <span className="page-number">1</span>
          <span className="page-number">2</span>
          <span className="page-number">3</span>
          <span className="page-number">...</span>
          <span className="page-number">15</span>
          <span className="page-number">16</span>
          <button className="next-button">&gt;</button>
        </div>
      </div>
    </>
  );
};

const Tablerow = ({
  user,
  showUserDetailMenu,
  onSetShowUserDetailMenu,
}: {
  user: UserDetails;
  showUserDetailMenu: number | null;
  onSetShowUserDetailMenu: (id: number | null) => void;
}) => {
  console.log(user);
  const formatDate = (isoDate: string): string => {
    return format(new Date(isoDate), "MMM d, yyyy h:mmaaa");
  };

  function showAction(user: number | null) {
    onSetShowUserDetailMenu(user);
  }
  return (
    <tr className="user-table-row">
      <td>{user.organization}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{formatDate(user.date)}</td>
      <td>
        <span className={`status ${user.status}`}>{user.status}</span>
      </td>
      <td>
        <img
          onClick={() => {
            showAction(user.id);
          }}
          src={userDetailMenuImage}
          alt="detailMenu"
        />
      </td>
      {showUserDetailMenu === user.id ? <UsersActions /> : ""}
    </tr>
  );
};

const UsersActions = () => {
  return (
    <div className="users-actions">
      <button className="action-button">
        <img src={viewDetailsIcon} alt="View Details" /> View Details
      </button>
      <button className="action-button">
        <img src={blacklistUserIcon} alt="Blacklist User" />
        Blacklist User
      </button>
      <button className="action-button">
        <img src={activateUserIcon} alt="Activate User" />
        Activate User
      </button>
    </div>
  );
};

export default UsersDetails;
