import './style.scss';
import logo from '../../assets/logo.png';
import Navigate from '../../components/Navigate';



function Header(){
    return(
        <header className="containerHeader">
            <div className="logoImg">
<img src={logo} alt="logo FJS" className="logoFJS"/></div>
<Navigate/>
        </header>
    )
}
export default Header