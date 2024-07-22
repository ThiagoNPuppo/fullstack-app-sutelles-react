import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Menu() {
  const classMenuMobile = "w3-bar-block w3-large w3-black w3-hide w3-hide-large w3-hide-medium";
  const [selecionado, setSelecionado] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const submenuRef = useRef(null);
  const navigate = useNavigate();

  const onClickMenu = () => {
    setSelecionado(!selecionado);
  };

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
    <div className="w3-top w3-margin-bottom">
      <nav className="w3-bar w3-large w3-black">
        <a className="w3-bar-item w3-button w3-hide-large w3-hide-medium" onClick={onClickMenu}>
          &#9776;
        </a>
        <Link to="/" className="w3-bar-item w3-button">
          <i className="fa fa-home w3-xlarge"></i>
        </Link>
        <Link to="/" className="w3-bar-item w3-button w3-hide-small">Home</Link>
        <Link to="/produtos" className="w3-bar-item w3-button w3-hide-small">Produtos</Link>
        <Link to="/clientes" className="w3-bar-item w3-button w3-hide-small">Clientes</Link>
        <Link to="/pedidos" className="w3-bar-item w3-button w3-hide-small">Pedidos</Link>
        <div className="w3-bar-item w3-button w3-hide-small" onClick={toggleSubmenu}>
          Cadastro
        </div>
        {showSubmenu && (
          <div ref={submenuRef} className="w3-bar-block w3-large w3-black" style={{ position: 'absolute', top: '50px' }}>
            <div className="w3-bar-item w3-button" onClick={() => handleNavigation('/cadastro/produtos')}>Produtos</div>
            <div className="w3-bar-item w3-button" onClick={() => handleNavigation('/cadastro/clientes')}>Clientes</div>
          </div>
        )}
        <a href="#" className="w3-bar-item w3-button w3-right">
          <i className="fa fa-search w3-xlarge"></i>
        </a>
      </nav>
      <nav id="menu-mobile" className={classMenuMobile + (selecionado ? " w3-show" : "")}>
        <Link to="/" className="w3-bar-item w3-button">Home</Link>
        <Link to="/produtos" className="w3-bar-item w3-button">Produtos</Link>
        <Link to="/clientes" className="w3-bar-item w3-button">Clientes</Link>
        <Link to="/pedidos" className="w3-bar-item w3-button">Pedidos</Link>
        <div className="w3-bar-item w3-button" onClick={toggleSubmenu}>
          Cadastro
        </div>
        {showSubmenu && (
          <div ref={submenuRef} className="w3-bar-block w3-large w3-black" style={{ position: 'absolute', top: '50px' }}>
            <div className="w3-bar-item w3-button" onClick={() => handleNavigation('/cadastro/produtos')}>Produtos</div>
            <div className="w3-bar-item w3-button" onClick={() => handleNavigation('/cadastro/clientes')}>Clientes</div>
          </div>
        )}
      </nav>
    </div>
  );
}
