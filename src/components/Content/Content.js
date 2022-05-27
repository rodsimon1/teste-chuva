import Discussions from '../Discussions/Discussions';
import Summary from '../Summary/Summary';
import Video from '../Video/Video';
import './Content.css';

const Content = () => {
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

      <Video />
      <Summary />
      <Discussions />
    </div>
  );
};

export default Content;
