import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
// import Users from "../components/Users.tsx"

function DashBoard({onShowDashboard}: { onShowDashboard: (show: boolean) => void }) {
  return (
    <>
      <Header />
      <section style={{ display: "flex", position: 'relative' }}>
        <Navigation onShowDashboard={onShowDashboard} />
        <Outlet />
      </section>
    </>
  )
}

export default DashBoard