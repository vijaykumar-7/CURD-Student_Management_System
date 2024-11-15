// import './App.css';
// import Button from 'react-bootstrap/Button';
import DashBoard from './components/dashBoard/dasboard';
import NoMatch from './components/nomatch/noMatch';
import PostStudent from './components/postStudent/postStudent';
import UpdateStudent from './components/updateStudent/updateStudent';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<DashBoard></DashBoard>}></Route>
      <Route path='/stu' element={<PostStudent></PostStudent>}></Route>
      <Route path='/user/:id' element={<UpdateStudent></UpdateStudent>}></Route>
      <Route path='*' element={<NoMatch></NoMatch>}></Route>
    </Routes>
    </>
  );
}

export default App;
