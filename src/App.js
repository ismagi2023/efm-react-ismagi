import Navbarr from "./components/navbar/Navbarr";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
// import Home from './components/home/Home';
import Movie from './components/movies/Movie';
import Serie from './components/series/Serie';
import Anime from './components/animes/Anime';

import "./App.css" ;

function App() {
    return (
        // <div className="App">
        <BrowserRouter>
            <Navbarr />
            <Routes>
                {/* <Route exact path="/" element={<Home/>} /> */}
                <Route path="/movies" element={<Movie />} />
                <Route path="/series" element={<Serie />} />
                <Route path='/animes' element={<Anime />} />
                {/* <Route path='/*' element={<NotFound/>} /> */}
            </Routes>    
    </BrowserRouter>
        // </div>
    );
}

export default App;
