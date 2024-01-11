import {useState, useEffect} from "react";
import {Navbar,Container } from "react-bootstrap";
import logo1 from "../assets/img/logo1.png";




export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled ] = useState(false);
    
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          seScrolled(true);
        } else {
          seScrolled(false);
        }
      }

      window.addEventListener("scroll", onScroll);

      return() => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo1} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
      </Container>
    </Navbar>
  );
}


  