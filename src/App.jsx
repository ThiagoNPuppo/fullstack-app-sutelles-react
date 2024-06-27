import Carroussel from "./components/Carroussel"

function App() {

  return (
    <>
      <div className="w3-top w3-margin-botton">
        <nav className="w3-bar w3-large w3-black">
          <a className="w3-bar-item w3-button w3-hide-large w3-hide-medium" >&#9776;</a>
          <a href="#" className="w3-bar-item w3-button">
            <i className="fa fa-home w3-xlarge"></i>
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small">Menu 1</a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small">Menu 2</a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small">Menu 3</a>
          <a href="#" className="w3-bar-item w3-button w3-right">
            <i className="fa fa-search w3-xlarge"></i>
          </a>
        </nav>
        <nav id="menu-mobile" className="w3-bar-block w3-large w3-black w3-hide w3-hide-large w3-hide-medium">
          <a href="#" className="w3-bar-item w3-button">Menu 1</a>
          <a href="#" className="w3-bar-item w3-button">Menu 2</a>
          <a href="#" className="w3-bar-item w3-button">Menu 3</a>
        </nav>
      </div>


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
