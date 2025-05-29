import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Users from "../components/Users.tsx"

function DashBoard() {
  return (
    <>
      <Header />
      <section style={{ display: "flex" }}>
        <Navigation />
        <Users />
      </section>
    </>
  )
}

export default DashBoard