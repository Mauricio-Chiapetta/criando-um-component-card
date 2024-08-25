import { Poster } from "./components/poster"
import empireStrikesBack from "./assets/esb-poster.jpg"
import returnJedi from './assets/rotj-poster.jpg'
import starwarsPoster from './assets/starwarsPoster.jpg'



function App() {
  return (
    <><Poster title ="Pôster: Star Wars (1977)" postersrc={starwarsPoster}/>
    <Poster title ="Pôster: Empire Strikes Back (1980)" postersrc={empireStrikesBack}/>
    <Poster title ="Pôster: Return of the Jedi (1983)" postersrc={returnJedi}/>
    </>
 )
}

export default App;
