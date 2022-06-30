
import './style.scss';
import {newsFondation} from '../../datas/news';
console.log(newsFondation)


 function NewsFondation(){
  
    return(
        
    <div className="containerNew">
      <div className="title"> Les news de la fondation</div>
<div className="containerCardNew">

  {newsFondation.map((nouveaute, index)=> <section className="cardNew" key={index}>

  <div className="card-thumbNew">
      
       <img src={nouveaute.pictureNew} alt="photoArticle" className="imageNew" />
        <span className="card-category">{nouveaute.category}</span>
      </div>
      {/* <div className="card-dateNew">
        <span>January</span>
        <span>16</span>
      </div> */}
      <div className="card-body">
        <h2 className="card-title">{nouveaute.titleNew}</h2>
       
        <p className="card-description">
        {nouveaute.textNew}
        </p>
      </div>
      <div className="card-footerNew">
       
      
      </div>




  
      </section>
  
  
  )}
  </div>  

 
    </div>
    
    
    )
}

export default NewsFondation;