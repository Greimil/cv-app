import { useState ,  useRef} from "react";
import Cv from "./components/Cv";
import { useReactToPrint } from 'react-to-print';

function App() {
  const [color, setColor] = useState("#5B9DD7")
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
    
  });

  
  return (
    <div id="app"  className="bg-slate-700 text-white shadow ">
      <h1 className="text-center font-semibold text-lg p-6 text-white ">
        Curriculum vitae Generator{" "}
      </h1>
      <div className="flex items-center justify-center">
        <label className="text-base font-semibold" htmlFor="colorChange">
          Cambiar color primario:{" "}
        </label>
        <input
          type="color"
          className=" ml-3 mr-3 "
          name="colorChanger"
          id="colorChange"
          onChange={(e)=> {
            setColor(e.target.value)
          }}
          
        />
      </div>

      <div className="flex justify-center items-center" >    
      <Cv color={color} ref={componentRef}  />
      </div>
     <div className="flex justify-center p-3" >
     
     <button onClick={handlePrint} className="border border-1 bg-slate-100 rounded-lg text-black pt-2 pb-2 pl-4 pr-4" >Imprimir Curriculum</button>
     </div>

    </div>
  );
}

export default App;
