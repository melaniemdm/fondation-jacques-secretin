import ScrollToTop from "react-scroll-to-top";
import Banner from "../../components/Banner";
import Presentation from '../../components/Presentation';
import { jacquesSecretinImg} from '../../datas/imgJacquesS';

function Accueil() {
    return (
      <div>
        <Banner data={jacquesSecretinImg.picturesBanner}/>
        <Presentation/>
        <ScrollToTop />
      </div>
    );
  }
  export default Accueil;