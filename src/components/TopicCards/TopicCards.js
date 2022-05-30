import { useState } from 'react';
import './TopicCards.css';

const TopicCards = ({ newTopic }) => {
  const [topic] = useState({
    subject: 'Assunto da pergunta aparece aqui',
    poster: 'Carlos Henrique Santos',
    text: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...',
    likes: 1,
    answers: 1,
  });
  return (
    <div className="discussion__body-topic">
      {newTopic && (
        <div className="discussion__body-newTopic">
          <img src="./images/check.png" alt="" />
          <div className="discussion__body-newTopic-feedback">Aguardando feedback dos autores</div>
          <div>
            <a href="/">Editar tópico</a>
          </div>
        </div>
      )}
      <div className={newTopic ? 'blur discussion__body-topic-title' : 'discussion__body-topic-title'}>{topic.subject}</div>
      <div className={newTopic ? 'blur discussion__body-topic-poster' : 'discussion__body-topic-poster'}>{topic.poster}</div>
      <div className={newTopic ? 'blur discussion__body-topic-text' : 'discussion__body-topic-text'}>{topic.text}</div>
      <div className={newTopic ? 'blur discussion__body-topic-cardFooter' : 'discussion__body-topic-cardFooter'}>
        <img className="cardFooterItem" src="./images/card-mais-info.png" alt="mais info" />
        <img className="cardFooterItem" src="./images/card-favoritar.png" alt="favoritar" />
        <p className="cardFooterItem">
          {topic.likes} {topic.likes === 1 ? 'like' : 'likes'}
        </p>
        <p className="cardFooterItem">
          {topic.answers} {topic.answers === 1 ? 'resposta' : 'respostas'}
        </p>
      </div>
    </div>
  );
};

export default TopicCards;
