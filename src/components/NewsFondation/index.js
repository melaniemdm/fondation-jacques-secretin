import new1F from '../../assets/new1F.jpg';
import './style.scss';


 function NewsFondation(){
    return(
        
    <div className="containerNew">
      <div className="title"> Les news de la fondation</div>
<section class="cardNew">
      <div class="card-thumbNew">
        <a href="# "><img src={new1F} alt="" className="imageNew" /></a>
        <span class="card-category">Histoire</span>
      </div>
      <div class="card-dateNew">
        <span>January</span>
        <span>16</span>
      </div>
      <div class="card-body">
        <h2 class="card-title">Création de la fondation</h2>
       
        <p class="card-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla atque
          consectetur, adipisicing elit.
        </p>
      </div>
      <div class="card-footerNew">
       
      
      </div>
    </section>
 
    </div>
    
    
    )
}

export default NewsFondation;