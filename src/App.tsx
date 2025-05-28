import Login from "./pages/Login"
import Header from "./components/Header"
import Navigation from "./components/Navigation"

function App() {

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Navigation />
        <Login />
      </div>
    </>
  )
}

export default App
