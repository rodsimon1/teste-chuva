import './Discussions.css';

const Discussions = () => {
  return (
    <div className="discussion">
      <div className="discussion__header">Discussões</div>
      <div className="discussion__body">
        <div className="discussion__body-title">Compartilhe suas ideias ou dúvidas com os autores!</div>
        <div className="discussion__body-icons">
          <img src="./images/icone1.png" alt="mão" />
          <img src="./images/icone2.png" alt="q&a" />
          <img src="./images/icone3.png" alt="duvidas" />
        </div>
      </div>
    </div>
  );
};

export default Discussions;
