import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [user] = useState({
    name: 'Alguem',
    email: 'alguem12@galoascience.com',
    gender: 'feminino',
    photo: './images/avatar.png',
    notification: 2,
  });

  return (
    <header className="header">
      <div className="header__titles">
        <p className="header__titles-subtitle">Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
        <p className="header__titles-main-title">Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
        <p className="header__titles-code">ISSN: 1234-5678</p>
      </div>

      <div className="language">
        <img src="./images/language-image.png" alt="language" />
        PT, BR &#9660;
      </div>

      <div className="login">
        {/*  */}
        <div className="login__dados">
          <p className="login__dados-bemvindo">{user.gender === 'masculino' ? 'Bem vindo!' : 'Bem vinda!'}</p>
          <p className="login__dados-email">{user.email}</p>
        </div>

        <div className="login__avatar">
          <img src={user.photo} alt="avatar" />
          <div className="login__avatar-badge"> {user.notification}</div>
        </div>
        {/*  */}
      </div>
    </header>
  );
};

export default Header;
