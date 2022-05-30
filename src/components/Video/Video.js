import { useRef, useState } from 'react';
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
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  const handleVideo = () => {
    console.log(vidRef.current.paused);
    // console.log('click');

    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  const overlaysContainerClass = vidRef.current.paused ? '' : 'overlays-container-none';

  return (
    <div className="content__video">
      <div className="content__video-video">
        <div className="content__video-video-videoContainer">
          <span className="content__video-video-videoControl" onClick={handleVideo}></span>
          <video src="./Videos/video1.mp4" type="video/mp4" ref={vidRef} width="650" height="400" controls>
            Your browser does not support HTML video
          </video>
        </div>

        <div className={overlaysContainerClass}>
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
  );
};

export default Video;
