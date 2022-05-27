import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="side-menu">
      <div className="sideBar">
        <div className="sideBar__header">
          <p>SLACA 2019</p>
        </div>

        <div className="sideBar__logo">
          <img src="./images/slacaLogo.png" alt="Slaca Logo" />
        </div>

        <ul>
          <li className="menu-item">
            <a href="/">Apresentação</a>
          </li>
          <li className="menu-item">
            <a href="/">Comitês</a>
          </li>
          <li className="menu-item">
            <a href="/">Autores</a>
          </li>
          <li className="menu-item">
            <a href="/">Eixos temáticos</a>
          </li>
          <li className="menu-item active ">
            <a href="/">Trabalhos</a>
          </li>
          <li className="menu-item">
            <a href="/">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
