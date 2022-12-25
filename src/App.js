import './App.css';
let name = "Ahmed";
function App() {
  return (
   <>

   <div className="navbar">

   <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact Us</li>
   </nav>

   </div>

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
