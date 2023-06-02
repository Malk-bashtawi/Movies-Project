import Container from 'react-bootstrap/esm/Container';
import MoviesList from './Component/MoviesList';
import Navbar from './Component/Navbar';
import MoviDetails from './Component/MoviDetails';
import {Route,Routes,BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="color_body">
     <Navbar  />
     <Container>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={ <MoviesList />} />
     <Route path="/:id" element={<MoviDetails />} />
    </Routes>
       </BrowserRouter>
          

     </Container>
    </div>
  );
  }

export default App;


