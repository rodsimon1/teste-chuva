import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />

      <Content />

      <Footer />

      {/* footer  */}
    </div>
  );
}

export default App;
