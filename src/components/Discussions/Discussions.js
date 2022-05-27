import { useState } from 'react';
import TopicCards from '../TopicCards/TopicCards';
import './Discussions.css';

const Discussions = () => {
  const [isInitialMode, setIsInitialMode] = useState(true);
  const [isInputmode, setIsInputmode] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    console.log('enviado');
    setIsInputmode(false);
    setIsFormSent(true);
  };

  return (
    <div className="discussion">
      <div className="discussion__header">Discussões</div>
      <div className="discussion__body">
        {/*  */}
        {/*    ---------   TELA INICIAL    --------- */}
        {isInitialMode && (
          <>
            <div className="discussion__body-title">Compartilhe suas ideias ou dúvidas com os autores!</div>
            <div className="discussion__body-icons">
              <img src="./images/icone1.png" alt="mão" />
              <img src="./images/icone2.png" alt="q&a" />
              <img src="./images/icone3.png" alt="duvidas" />
            </div>
            <div className="discussion__body-subtitle">
              Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos
              ou sugestões para o autor!
            </div>
            <div className="discussion__body-button">
              <button
                onClick={() => {
                  setIsInitialMode(false);
                  setIsInputmode(true);
                }}
              >
                <span className="plus">+</span> criar tópico
              </button>
              <div className="discussion__body-button-divider"></div>
            </div>
          </>
        )}

        {/*    ---------   TELA PARA CRIAR TOPICO     --------- */}
        {isInputmode && (
          <>
            <div className="discussion__body-inputs">
              <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>

              <form action="">
                <div className="discussion__body-form">
                  <label htmlFor="assunto">Assunto</label>
                  <input
                    type="text"
                    name="assunto"
                    id="assunto"
                    placeholder="Defina um tópico sucinto para notificar os autores..."
                  />{' '}
                  <label htmlFor="conteudo">Conteúdo</label>
                  <textarea name="conteudo" id="conteudo" cols="30" rows="10"></textarea>
                  <input type="submit" value="Enviar" onClick={(e) => handleInput(e)} />
                </div>
              </form>
              <div className="discussion__body-button-divider"></div>
            </div>
          </>
        )}

        {/*    ---------   TELA TOPICO ENVIADO   --------- */}
        {isFormSent && (
          <>
            <div className="discussions__body-formSent">
              <div className="discussions__body-formSent-title">Seu tópico foi enviado com sucesso! :D</div>
              <div className="discussions__body-formSent-subtitle">
                Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for
                respondido!
              </div>
              <div className="discussions__body-formSent-link">
                <a href="/">Descubra outros trabalhos!</a>
              </div>
              <div className="discussion__body-button">
                <button
                  onClick={() => {
                    setIsInputmode(true);
                    setIsFormSent(false);
                  }}
                >
                  <span className="plus">+</span> criar novo tópico
                </button>
                <div className="discussion__body-button-divider"></div>
              </div>
            </div>
            <TopicCards newTopic />
          </>
        )}

        {/* poderia fazer o map dos cards se viessem do backend */}
        <TopicCards />
        <TopicCards />
      </div>
    </div>
  );
};

export default Discussions;
