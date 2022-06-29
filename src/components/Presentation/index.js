import article from '../../assets/article.png';
import './style.scss';
import '../../styles/commun.scss';

function Presentation(){
    return (     
  <div className="containerPrésentation">
    <div className="title">Présentation de la fondation</div>
     
                    <div className="img-card iCard-style1">
                        <div className="card-content">
                            <div className="card-image">
                               
                                <img src={article} alt="img de JS" className="imgJS"/>
                            </div>
                            
                            <div className="card-text">
                                <h2>Présentation de Jacques Secrétin</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by <a href="https://pixabay.com/users/Hans-2/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451" >Hans Braxmeier</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451" >Pixabay</a>
                                </p>
                            </div>
                            
                        </div>
                        
                        <div class="card-link">
                            <a href="# " title="Read Full"><span>Lire la suite</span></a>
                        </div>
                    </div>                    
              

  </div>




)
}
export default Presentation;