import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      {/* main body  */}
      <Sidebar />

      {/* header  */}
      {/* title, idioma, avatar e login */}
      <Header />

      <Content />
      {/* div video  */}
      {/* titulo  */}
      {/* download, etc  */}
      {/* video  */}
      {/* detalhes do video  */}

      {/* resumo (expansível)  */}

      {/* discussões  */}
      {/* criar novo tópico abre caixa de texto com assunto e conteúdo  */}
      {/* tópico enviado retorna  mensagem de sucesso  */}

      {/* tópicos  */}
      {/* card de tópicos expansíveis  */}

      {/* footer  */}
    </div>
  );
}

export default App;
