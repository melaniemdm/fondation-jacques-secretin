import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Accueil';
// import Profil from '../pages/Profil';
// import Reglage from '../pages/Reglage';
// import Communaute from '../pages/Communaute';
import Header from '../layout/Header';


/* A function that returns a Router component. */
function CustomsRoutes(){
  return (
    <Router>
      <Header />
      <div>
   
      <Routes>
      <Route exact path="/" element={<Accueil />} />
        <Route exact path="/accueil" element={<Accueil />} />
      
      </Routes></div>
     
    </Router>
  );
}

export default CustomsRoutes;