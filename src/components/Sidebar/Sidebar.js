import './Sidebar.css';

const Sidebar = () => {
  return (
    //  menu lateral esquerdo
    <nav className="side-menu">
      <div className="sideBar">
        {/*  header  */}
        <div className="sideBar__header">
          <p>SLACA 2019</p>
        </div>

        {/*   logo   */}
        <div className="sideBar__logo">
          <img src="./images/slacaLogo.png" alt="Slaca Logo" />
        </div>

        {/*   itens   */}
        <ul>
          <li className="menu-item inactive">
            <a href="/">Apresentação</a>
          </li>
          <li className="menu-item inactive">
            <a href="/">Comitês</a>
          </li>
          <li className="menu-item inactive">
            <a href="/">Autores</a>
          </li>
          <li className="menu-item inactive">
            <a href="/">Eixos temáticos</a>
          </li>
          <li className="menu-item active ">
            <a href="/">Trabalhos</a>
          </li>
          <li className="menu-item inactive">
            <a href="/">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
