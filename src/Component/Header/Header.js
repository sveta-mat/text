import { NavLink } from "react-router-dom"
import "./Header.css"

function Header(){
    return(
        <div>
      <section className="content">
      <div className="image-container" >
       <img className="imgChem" src="https://rekish.by/wp-content/uploads/2020/06/depositphotos_6929880_s-2019.jpg"></img></div>
       <div className="display1"><NavLink to="/ProductOne" style={{ textDecoration: 'none', color: 'inherit' }}><span className="btn">KMnO₄ </span></NavLink>
       <NavLink to="/ProductTwo" style={{ textDecoration: 'none', color: 'inherit' }}> <span className="btn2">KI </span></NavLink>
        <NavLink to="/Video" style={{ textDecoration: 'none', color: 'inherit' }}><span className="btn3">Տեսանյութեր </span></NavLink>
        <NavLink to="/Experiment" style={{ textDecoration: 'none', color: 'inherit' }}><span className="btn4">Այլ աղերով փորձեր</span></NavLink></div> 
       
      
    </section>
    </div>
    )
}

export default Header