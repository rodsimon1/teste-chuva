import { useState } from 'react';
import './Content.css';

const Content = () => {
  const [presentation] = useState({
    type: 'Pôster',
    theme: 'Alimentação e saúde (AS)',
    keywords: ['Alimentos funcionais', 'alimentação escolar'],
    authors: ['Galileu Galilei¹', 'Berta Lange de Morretes²', 'Isaac Newton³', 'Cesar Lattes¹', 'Stephen Hawking⁴'],
    university: [
      '¹Universidade Estadual de Campinas',
      '²Universidade de São Paulo',
      '³Instituto Nacional de Pesquisas Espaciais',
      '⁴Universidade Federal do Rio de Janeiro',
    ],
  });

  return (
    <div className="content">
      <div className="content__title">
        <h2 className="content__title-title">
          Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de
          Campinas/SP{' '}
        </h2>

        <div className="content__title-icons">
          <div className="content__title-icons-buttons">
            <button className="big">
              {/* {' '} */}
              <img src="./images/downloadArrow.png" alt="down arrow" /> Download
            </button>
            <button className="small">
              <img src="./images/whiteStar.png" alt="" />
            </button>
            <button className="small">
              <img src="./images/doi.png" alt="doi" />
            </button>
          </div>
          <p className="content__title-icons-citation">
            <a href="/">COMO CITAR ESSE TRABALHO</a>
          </p>
        </div>
      </div>

      <div className="content__video">
        <div className="content__video-video">
          <p className="content__video-video-overlayTop">
            Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de
            Campinas/SP{' '}
          </p>

          <div className="content__video-video-overlayBottom">
            <img src="./images/imagem-video.png" alt="" />
            <div className="content__video-video-overlayBottom-name">
              <h3>Beatriz Christiane Melo</h3>
              <p>FCA / Universidade Estadual de Campinas</p>
            </div>
          </div>

          <video width="650" height="400" controls>
            <source src="./Videos/video1.mp4" type="video/mp4" />
            Your browser does not support HTML video
          </video>
        </div>

        <div className="content__video-details">
          <div className="content__video-details-header">Detalhes</div>
          <div className="content__video-details-details">
            {/* prettier-ignore */}
            <p>Tipo de Apresentação: <strong>{presentation.type}</strong></p>
            <p>
              Eixo temático: <strong> {presentation.theme}</strong>
            </p>
            <p>
              Palavras-chave: <strong> {presentation.keywords.map((keyword) => `${keyword}, `)}</strong>
            </p>
            <p>
              <strong>Autores: </strong>
            </p>
            <p>
              {presentation.authors.map((author) => (
                <div> {author}</div>
              ))}
            </p>
            <br />
            <p style={{ color: '#9c9c9c' }}>
              {presentation.university.map((uni) => (
                <div>{uni}</div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
