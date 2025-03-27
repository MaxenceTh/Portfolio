import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/navbar/navbar.jsx'
import Home from './component/home/home.jsx'
import Experience from './component/experience/experience.jsx'
import Service from './component/service/service.jsx'
import Cv from './component/cv/cv.jsx'
import Footer from './component/formulaire/footer.jsx'
import Personnel from './component/personnel/personnel.jsx'
import Service2 from './component/service/servicev2.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Cv />
    <Experience />
    <Personnel />
    <img src="./assets/bordure.svg" alt="" className='bg-black pt-11'/>
    <Service2 />
    <img src="./assets/bordureNoir.svg" alt="" className='pt-3 rotate-180 bg-gradient-to-b from-black via-black to-customYellow'/>
    {/* <Formulaire /> */}
    <Footer /> 
  </StrictMode>,
)