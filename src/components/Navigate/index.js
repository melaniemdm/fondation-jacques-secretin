import './style.scss'
import {Link} from 'react-router-dom';


function Navigate(){
    return(
        <div className="containerNav">
            
<nav className="navigate">
      <Link to="/accueil " className="accueil">Accueil</Link> 
      <Link to="/presentation " className="presentation">Présentation</Link>
      <Link to="/news " className="news">Les news de la fondation</Link>
      <Link to="/aider " className="aider">Nous aider</Link>
    </nav>
        </div>
    )
}
export default Navigate;