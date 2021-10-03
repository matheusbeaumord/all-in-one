import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/globals';


const App: React.FC = () => {
  useEffect(() => {
    if (window.navigator.onLine === false) {
      toast.error(
        'Você parece estar sem internet. Verifique sua conexão para continuar.',
      );
    }
  }, []);

  return (
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
  );
};

export default App;