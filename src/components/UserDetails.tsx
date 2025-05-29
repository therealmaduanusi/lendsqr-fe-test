import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "./Loader.tsx";
function UsersDetails() {
  const [usersDetails, setUsersDetails] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  localStorage.setItem('usersDetails', JSON.stringify(usersDetails));
  const storedUsersDetails = JSON.parse(localStorage.getItem('usersDetails') || '{}');
  console.log('storedUsersDetails', storedUsersDetails);


  useEffect(() => {
    // Fetch user details or perform any side effects here
    async function fetchUserDetails() {
      try {
        setTimeout(async () => {
          const response = await axios.get('/api/users-api.json');
          setUsersDetails(response.data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
    fetchUserDetails();
  }, [])
  // console.log('usersDetails', usersDetails);

  return (
    <div className="user-details">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h2>User Details</h2>
        </div>
      )}
    </div>
  )
}

export default UsersDetails