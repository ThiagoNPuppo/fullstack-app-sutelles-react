import Carroussel from "./components/Carroussel"
import Menu from "./components/Menu"

function App() {

  return (
    <>
      <Menu></Menu>
      <main>
        <div className="w3-container w3-padding-16 w3-margin-top">
          <h1>Minha Petshop</h1>
        </div>
        <Carroussel />
        <div className="w3-row w3-container w3-margin-top">
          <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
              <div className="w3-container w3-center">
                <img src="pedigree.jpg" style={{ width: "70%" }} />
                <h5>Informações do Produto - lorem ipsum dolor</h5>
                <h3 className="w3-blue">R$ 100,00</h3>
              </div>
            </div>
          </div>
          <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
              <div className="w3-container w3-center">
                <img src="pedigree.jpg" style={{ width: "70%" }} />
                <h5>Informações do Produto - lorem ipsum dolor</h5>
                <h3 className="w3-blue">R$ 100,00</h3>
              </div>
            </div>
          </div>
          <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
              <div className="w3-container w3-center">
                <img src="pedigree.jpg" style={{ width: "70%" }} />
                <h5>Informações do Produto - lorem ipsum dolor</h5>
                <h3 className="w3-blue">R$ 100,00</h3>
              </div>
            </div>
          </div>
          <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
              <div className="w3-container w3-center">
                <img src="pedigree.jpg" style={{ width: "70%" }} />
                <h5>Informações do Produto - lorem ipsum dolor</h5>
                <h3 className="w3-blue">R$ 100,00</h3>
              </div>
            </div>
          </div>
          <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
              <div className="w3-container w3-center">
                <img src="pedigree.jpg" style={{ width: "70%" }} />
                <h5>Informações do Produto - lorem ipsum dolor</h5>
                <h3 className="w3-blue">R$ 100,00</h3>
              </div>
            </div>
          </div>
          <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
              <div className="w3-container w3-center">
                <img src="pedigree.jpg" style={{ width: "70%" }} />
                <h5>Informações do Produto - lorem ipsum dolor</h5>
                <h3 className="w3-blue">R$ 100,00</h3>
              </div>
            </div>
          </div>

        </div>

      </main>


      <footer className="w3-container w3-margin-top w3-black ">
        <p className="w3-center">Realizado por Ries (imagens retiradas de petz.com.br)</p>
      </footer>

    </>
  )
}

export default App
