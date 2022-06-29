import './style.scss'
import connaitre from '../../assets/connaitre.jpg';
import vocation from '../../assets/vocation.jpg';
import team from '../../assets/team.jpg';
import reve from '../../assets/reve.webp';
import feedBack from '../../assets/feedBack.jpg';

function Mission(){
    return(<div className="containerMission">
    <div className="titleMision">Nos Missions</div>
    <div className="containerMissionContenu">
        
<div className="containerMissionDetail">
<div className="titleMissionDetail">Faire connaite le Tennins de table aux plus jeunes</div>
<div className="containerImg">
<img src={connaitre} alt="connaite le tennis de table" className="connaite"/></div>
<div className="suite">lire la suite</div>
</div>

<div className="containerMissionDetail"><div className="titleMissionDetail">Créer des vocations</div>
<div className="containerImg">
<img src={vocation} alt="créer des vocations" className="vocation"/></div> 
<div className="suite">lire la suite</div> </div> 
<div className="containerMissionDetail"><div className="titleMissionDetail">Renforcer la solidarité et l'esprit d'équipe</div>
<div className="containerImg">
<img src={team} alt="renforcer la solidarité" className="team"/></div>   
<div className="suite">lire la suite</div></div>
<div  className="containerMissionDetail"><div className="titleMissionDetail">Faire rêver les enfants </div>
<div className="containerImg">
<img src={reve} alt="faire rêver" className="reve"/></div> 
<div className="suite">lire la suite</div></div>
<div  className="containerMissionDetail"><div className="titleMissionDetail">Augmlenter l'épanouissement des grands et petits</div>
<div className="containerImg">
<img src={feedBack} alt="augmlenter l'épanouissement" className="feedBack"/></div>   
<div className="suite">Lire la suite</div></div>
    </div></div>)
}
export default Mission;