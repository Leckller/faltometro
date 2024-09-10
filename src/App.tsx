import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Layout from './components/Layout/Layout';
import Login from './routes/Login';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/Home" element={ <Home /> } />
      </Route>
      <Route path="/" element={ <Login /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
