import { useState } from 'react';
import './Video.css';

const Video = () => {
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
    <div className="content__video">
      <div className="content__video-video">
        <div className="content__video-video-videoContainer">
          <span className="content__video-video-videoControl"></span>
          <video src="./Videos/video1.mp4" type="video/mp4" width="650" height="400" controls>
            Your browser does not support HTML video
          </video>
        </div>

        <div>
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
        </div>
      </div>

      <div className="content__video-details">
        <div className="content__video-details-header">Detalhes</div>
        <div className="content__video-details-body">
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
          <div>
            {presentation.authors.map((author) => (
              <p style={{ margin: '0' }}> {author}</p>
            ))}
          </div>
          <br />
          <div style={{ color: '#9c9c9c', margin: '0', padding: 0 }}>
            {presentation.university.map((uni) => (
              <p style={{ margin: '0' }}>{uni}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
