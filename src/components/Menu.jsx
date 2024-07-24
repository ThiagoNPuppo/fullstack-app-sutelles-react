// import { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";


// export default function Menu() {
//   const classMenuMobile = "w3-bar-block w3-large w3-black w3-hide w3-hide-large w3-hide-medium";
//   const [selecionado, setSelecionado] = useState(false);
//   const [showSubmenu, setShowSubmenu] = useState(false);
//   const submenuRef = useRef(null);
//   const navigate = useNavigate();

//   const onClickMenu = () => {
//     setSelecionado(!selecionado);
//   };

//   const toggleSubmenu = (e) => {
//     e.preventDefault();
//     setShowSubmenu(!showSubmenu);
//   };

//   const handleClickOutside = (e) => {
//     if (submenuRef.current && !submenuRef.current.contains(e.target)) {
//       setShowSubmenu(false);
//     }
//   };

//   useEffect(() => {
//     if (showSubmenu) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showSubmenu]);

//   const handleNavigation = (path) => {
//     setShowSubmenu(false);
//     navigate(path);
//   };

//   return (
//     <div className="w3-top w3-margin-bottom">
//       <nav className="w3-bar w3-large w3-black">
//         <a className="w3-bar-item w3-button w3-hide-large w3-hide-medium" onClick={onClickMenu}>
//           &#9776;
//         </a>
//         <Link to="/" className="w3-bar-item w3-button">
//           <i className="fa fa-home w3-xlarge"></i>
//         </Link>
//         <Link to="/" className="w3-bar-item w3-button w3-hide-small">Home</Link>
//         <Link to="/produtos" className="w3-bar-item w3-button w3-hide-small">Produtos</Link>
//         <Link to="/clientes" className="w3-bar-item w3-button w3-hide-small">Clientes</Link>
//         <Link to="/pedidos" className="w3-bar-item w3-button w3-hide-small">Pedidos</Link>
//         <div className="w3-bar-item w3-button w3-hide-small" onClick={toggleSubmenu}>
//           Cadastro
//         </div>
//         {showSubmenu && (
//           <div ref={submenuRef} className="w3-bar-block w3-large w3-black" style={{ position: 'absolute', top: '50px' }}>
//             <div className="w3-bar-item w3-button" onClick={() => handleNavigation('/cadastro/produtos')}>Produtos</div>
//             <div className="w3-bar-item w3-button" onClick={() => handleNavigation('/cadastro/clientes')}>Clientes</div>
//           </div>
//         )}
//         <a href="#" className="w3-bar-item w3-button w3-right">
//           <i className="fa fa-search w3-xlarge"></i>
//         </a>
//       </nav>
//       <nav id="menu-mobile" className={classMenuMobile + (selecionado ? " w3-show" : "")}>
//         <Link to="/" className="w3-bar-item w3-button">Home</Link>
//         <Link to="/produtos" className="w3-bar-item w3-button">Produtos</Link>
//         <Link to="/clientes" className="w3-bar-item w3-button">Clientes</Link>
//         <Link to="/pedidos" className="w3-bar-item w3-button">Pedidos</Link>
//         <div className="w3-bar-item w3-button" onClick={toggleSubmenu}>
//           Cadastro
//         </div>
//         {showSubmenu && (
//           <div ref={submenuRef} className="w3-bar-block w3-large w3-black" style={{ position: 'absolute', top: '50px' }}>
//             <div className="w3-bar-item w3-button" onClick={() => handleNavigation('/cadastro/produtos')}>Produtos</div>
//             <div className="w3-bar-item w3-button" onClick={() => handleNavigation('/cadastro/clientes')}>Clientes</div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

export default function Menu() {
  //const [selecionado, setSelecionado] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const submenuRef = useRef(null);

  const navigate = useNavigate();

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setShowSubmenu(!showSubmenu);
  };

  const handleClickOutside = (e) => {
    if (submenuRef.current && !submenuRef.current.contains(e.target)) {
      setShowSubmenu(false);
    }
  };

  useEffect(() => {
    if (showSubmenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSubmenu]);

  const handleNavigation = (path) => {
    setShowSubmenu(false);
    navigate(path);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">SuTelles</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/produtos">Produtos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clientes">Clientes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pedidos">Pedidos</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={toggleSubmenu}>
                Cadastro
              </a>
              <div ref={submenuRef} className={`dropdown-menu ${showSubmenu ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#" onClick={() => handleNavigation('/cadastro/produtos')}>Produtos</a>
                <a className="dropdown-item" href="#" onClick={() => handleNavigation('/cadastro/clientes')}>Clientes</a>
              </div>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">pesquisar</button>
        </form>
      </nav>
    </div>
  );
}

