import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
// import Users from "../components/Users.tsx"

function DashBoard() {
  return (
    <>
      <Header />
      <section style={{ display: "flex", position: 'relative' }}>
        <Navigation />
        <Outlet />
      </section>
    </>
  )
}

export default DashBoard