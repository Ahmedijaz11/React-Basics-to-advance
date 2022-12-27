import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
let name = "Ahmed";
function App() {
  return (
   <>

      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

   

   <div className="Home">

    <h1>Hello I am {name}</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr
    um exercitationem ullam corporis suscipit laboriosam, nisi ut
    aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
    </p>
   </div>


   <div className="About">

  <h1>About Me</h1>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr
  um exercitationem ullam corporis suscipit laboriosam, nisi ut
  aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.
  </p>
  </div>

   </>
    


  );
}

export default App;
