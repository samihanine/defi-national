import 'app.scss';
import Home from 'pages/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Header from 'components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default App;
