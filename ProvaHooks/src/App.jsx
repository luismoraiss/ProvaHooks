import Subtitulo from "./Subtitulo/Subtitulo"
import TextoPrincipal from "./TextoPrincipal/TextoPrincipal"
import "./App.css"
import Button from "./Button/Button"
import Select from "./Select/Select"


const App = () =>{

return(


  <form>
   <img className="img-star" src="../images/icon-star.svg" alt="" />
   <TextoPrincipal
   texto="How did we do?"
   />
   <Subtitulo
   texto="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering"
   />
  <div className=" select">
  <Select
   number="1" />
   <Select
   number="2" />
   <Select
   number="3" />
   <Select
   number="4" />
   <Select
   number="5" />
    
  </div>

  <Button/>
  
  </form>
)
}

export default App
