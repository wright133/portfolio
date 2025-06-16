
import HomePage from './components/HomePage';
import Footer from './components/Footer'; 
import Featured from './components/Featured'; 
import VisualArt from './components/VisualArt'; 
import Artwork from './components/Artwork'; 
import CreativeCoding from './components/CreativeCoding';
import Apps from './components/Apps';
import './main.scss'; 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Article from './components/Article';
import UmojaArticle from './components/UmojaArticle';

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
              <Route path="/artwork" element={<Artwork/>} /> 
              <Route path="/creative-coding" element={<CreativeCoding/>} /> 
              <Route path="/apps" element={<Apps/>} /> 
              <Route path="/article-template" element={<Article/>} /> 
              <Route path="/umoja" element={<UmojaArticle/>} /> 
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </main>
    
  )
}

export default App; 
