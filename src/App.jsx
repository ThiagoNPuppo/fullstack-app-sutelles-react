import { Outlet } from "react-router-dom"
import Carroussel from "./components/Carroussel"
import Menu from "./components/Menu"

function App() {

  return (
    <>
      <Menu></Menu>
      <main>        
        <Carroussel />
        <div className="w3-row w3-container w3-margin-top">
          <Outlet></Outlet>
        </div>
      </main>

      <footer className="w3-container w3-margin-top w3-black ">
        <p className="w3-center">Todos os direitos reservados</p>
      </footer>

    </> 
  )
}

export default App
