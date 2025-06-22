
import HomePage from './components/HomePage';
import Footer from './components/Footer'; 
import Featured from './components/Featured'; 
import VisualArt from './components/VisualArt'; 
import Artwork from './components/Artwork'; 
import Exhibitions from './components/Exhibitions';
import About from './components/About';

import CreativeCoding from './components/CreativeCoding';
import GenArtHome from './components/creative-coding/GenArtHome'; 
import DevHome from './components/creative-coding/DevHome'; 
import WIPGallery from './components/creative-coding/WIPGallery'; 
import Tutorials from './components/creative-coding/Tutorials'; 
import Resources from './components/creative-coding/Resources'; 
import Experiments from './components/creative-coding/Experiments'; 
import Projects from './components/creative-coding/Projects'; 
import Scripts from './components/creative-coding/Scripts'; 

import './main.scss'; 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Article from './components/Article';
import UmojaArticle from './components/UmojaArticle'; 
import artworks from "./components/data/artworks";

function App() {
  return (
    <main>
      <div className="container">
        <div className="App"> 
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/footer" element={<Footer/>} />
              <Route path="/featured" element={<Featured/>} /> 
              <Route path="/visual-art" element={<VisualArt/>} /> 
              <Route path="/artwork/:slug" element={<Artwork artworks={artworks} />} />
              {/* <Route path="/artwork" element={<Artwork/>} />  */}
              <Route path="/article-template" element={<Article/>} /> 
              <Route path="/umoja" element={<UmojaArticle/>} /> 
              <Route path="/exhibitions" element={<Exhibitions />} />
              <Route path="/about" element={<About />} />
              {/* Creative Coding Section */}
              <Route path="/creative-coding" element={<CreativeCoding />} />
              <Route path="/creative-coding/gen-art" element={<GenArtHome />} />
              <Route path="/creative-coding/dev" element={<DevHome />} />
              <Route path="/creative-coding/gen-art/wips" element={<WIPGallery />} />
              <Route path="/creative-coding/gen-art/tutorials" element={<Tutorials />} />
              <Route path="/creative-coding/gen-art/resources" element={<Resources />} />
              <Route path="/creative-coding/gen-art/experiments" element={<Experiments />} />
              <Route path="/creative-coding/dev/projects" element={<Projects />} />
              <Route path="/creative-coding/dev/scripts" element={<Scripts />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </main>
    
  )
}

export default App; 
