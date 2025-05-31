import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import filterImage from "../assets/filter-results-button.svg";
import userDetailMenuImage from "../assets/userdetailmenu.svg";
import viewDetailsIcon from "../assets/viewdetails.svg";
import blacklistUserIcon from "../assets/blacklistuser.svg";
import activateUserIcon from "../assets/activateuser.svg";
import Loader from "./Loader.tsx";
function UsersDetails() {
  const [usersDetails, setUsersDetails] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [storedUsersDetails, setStoredUsersDetails] = useState<object | null>(
    null
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
          // } else {
          //   console.log("No user details found in localStorage");
          // }
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

type UserDetails = {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  date: string;
  status: string;
};
const UserTable = ({ storedUsersDetails }: { storedUsersDetails: [] }) => {
  const [showUserDetailMenu, setShowUserDetailMenu] = useState<number | null>(
    null
  );
  return (
    <>
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>
                <div className="header-with-icon">
                  Organization
                  <span>
                    <img src={filterImage} alt="filter" />
                  </span>
                </div>
              </th>
              <th>
                <div className="header-with-icon">
                  Username
                  <span>
                    <img src={filterImage} alt="filter" />
                  </span>
                </div>
              </th>
              <th>
                <div className="header-with-icon">
                  Email
                  <span>
                    <img src={filterImage} alt="filter" />
                  </span>
                </div>
              </th>
              <th>
                <div className="header-with-icon">
                  <span>Phone Number</span>
                  <span>
                    <img src={filterImage} alt="filter" />
                  </span>
                </div>
              </th>
              <th>
                <div className="header-with-icon">
                  Date Joined
                  <span>
                    <img src={filterImage} alt="filter" />
                  </span>
                </div>
              </th>
              <th>
                <div className="header-with-icon">
                  Status
                  <span>
                    <img src={filterImage} alt="filter" />
                  </span>
                </div>
              </th>
              <th></th> {/* For the dots */}
            </tr>
          </thead>
          <tbody>
            {storedUsersDetails.slice(0, 9).map((user: UserDetails) => (
              <Tablerow
                user={user}
                showUserDetailMenu={showUserDetailMenu}
                onSetShowUserDetailMenu={setShowUserDetailMenu}
              />
            ))}
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
  onSetShowUserDetailMenu: () => void;
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
