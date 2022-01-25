import logo from './logo.svg';
import './App.css';

import 'react-router-dom'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Layout from './components/Layout/Layout';
// import Posts from './pages/Posts/Posts';
// import Users from './pages/Users/'

function App() {
  return (

<Routes>
  <Route path={'/'} element={<Layout/>}>
    {/*<Route path={'/users'} element={<Users/>}/>*/}
  {/*<Route path={'/posts'} element={<Posts/>}/>*/}


  </Route>

  </Routes>

  );
}

export default App;
