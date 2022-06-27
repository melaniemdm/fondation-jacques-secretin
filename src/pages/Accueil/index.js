import ScrollToTop from "react-scroll-to-top";
import Banner from "../../components/Banner";
import { jacquesSecretinImg} from '../../datas/imgJacquesS';

function Accueil() {
    return (
      <div>
        <Banner data={jacquesSecretinImg.picturesBanner}/>
        
        <ScrollToTop />
      </div>
    );
  }
  export default Accueil;