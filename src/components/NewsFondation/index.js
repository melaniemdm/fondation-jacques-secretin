import new1F from '../../assets/new1F.jpg';
import './style.scss';


 function NewsFondation(){
    return(<div className='containerNews'>
        <div className="title">Les news de la Fondation</div>
   
    <div className="container">
    
      <div className="square">
     <img src={new1F} alt="tennis de table" className="mask"/>
     <div className="h1">Is Apple a Design Company?</div>
        <p>Apple is more than a tech company; it became a culture unto itself, a passion of most of people and the birthplace of the world’s most revolutionized products.</p>
        
     <div><a href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261" target="_" className="button">Lire la suite</a></div>
      </div>
      
      
      
     
      
        
      
      
    </div>
    
    
  
              
    </div>)
}

export default NewsFondation;