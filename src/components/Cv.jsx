import React from "react";

const Cv = React.forwardRef((props, ref)  => {
  const { color } = props;
  return (
    <div  ref={ref} className="w-11/12 lg:w-[210mm] h-[250mm]   mt-3 m-auto bg-slate-100  cv">
      <div className="h-1/4 flex " style={{ backgroundColor: color }}>
        <div className="w-2/4 h-full  flex items-center justify-center">
          <h1 contentEditable="true" className="font-semibold text-2xl  p-3 ">
            CHRISTOPHER MORGAN
          </h1>
        </div>
        <div className="w-2/4 h-full text-xs lg:text-xl  p-2 flex flex-col justify-around ">
          <h5>
            {" "}
            <strong>Dirección:</strong>{" "}
          </h5>
          <strong contentEditable="true" className="font-normal">
            mi dirección, calle #80
          </strong>

          <h5>
            {" "}
            <strong>Teléfono:</strong>{" "}
          </h5>
          <strong contentEditable="true" className="font-normal">
            809-452-2468
          </strong>

          <h5>
            <strong>Correo electrónico:</strong>{" "}
          </h5>
          <strong contentEditable="true" className="font-normal">
            chris.morgan@gmail.com
          </strong>
        </div>
      </div>

      <div className="text-black text-xs lg:text-xl flex flex-col justify-between lg:p-4 h-[72%]   ">
        <div className="p-2 h-1/4 ">
          <h2 className="font-bold mb-1 mt-1 text-sm lg:text-2xl  ">Objetivo Profesional</h2>

          <p contentEditable="true" className="  border-t-neutral-500 ">
            Desarrollar mis habilidades de cara al público en una empresa de
            prestigio, mejor los números del siguiente trimestre y enfocarme en
            la permanencia de los clientes, a través de la fidelización basada
            en un trato distinguido.
          </p>
        </div>

        <div className="p-2 h-1/4">
          <h2 className="font-bold  mt-1 text-sm lg:text-2xl h-[10%]  ">Habilidades</h2>
          
          <div className="flex  justify-center  border-t-neutral-500 " >
          <ul className="w-2/4  pl-4 pr-4 flex justify-end flex-col  p-4 h-[45%] " >
            <li contentEditable="true" className="list-disc  " >Manejo de proyectos</li>
            <li contentEditable="true" className="list-disc  " >Proactivo</li>
            <li contentEditable="true" className="list-disc " >Manejo de conflictos</li>
            
          </ul>
          <ul className="w-2/4   pl-4 pr-4 flex items-end justify-end flex-col p-4 h-[45%] ">
            <li contentEditable="true" className="list-disc w-2/4 " >Creatividad</li>
            <li contentEditable="true" className="list-disc  w-2/4 " >Innovador</li>
            <li contentEditable="true" className="list-disc w-2/4" >Autodidacta</li>
          </ul>
          </div>
        </div>

        <div className="p-2 h-1/4">
          <h2 className="font-bold mb-1 mt-1 text-sm lg:text-2xl  h-[5%]">Experiencia laboral</h2>

            <ul className=" border-t-neutral-500 pl-4 p-4  h-[95%] " >
              <li className="list-disc" contentEditable="true" >Trabajo #1 <strong className="ml-2 mr-2" contentEditable="true" >2/5/2018 - Presente</strong> </li>
              <li className="list-disc" contentEditable="true" >Trabajo #2 <strong className="ml-2 mr-2" contentEditable="true" >10/1/2013 - 30/4/2018</strong> </li>
              <li className="list-disc" contentEditable="true" >Trabajo #3 <strong className="ml-2 mr-2" contentEditable="true" >20/10/2008 - 30/5/2012</strong> </li>
            </ul>
        
        </div>


        <div className="p-2 h-1/4 flex flex-col justify-between">
          <h2 className="font-bold mb-1 mt-1 text-sm lg:text-2xl h-[5%]  ">Formación académica</h2>

            <ul className="  p-4 h-[95%]  " >
              <li className="flex justify-between font-semibold "  contentEditable="true" >Lic. Informático <strong className="ml-2 mr-2" contentEditable="true" >2/5/2018 - Presente</strong>   </li>
              <li className="flex justify-between font-semibold"  contentEditable="true" >Tec. reparación Pc  <strong className="ml-2 mr-2" contentEditable="true" >10/1/2013 - 30/4/2018</strong> </li>
              <li className="flex justify-between font-semibold"  contentEditable="true" >Ingles<strong className="ml-2 mr-2" contentEditable="true" >20/10/2008 - 30/5/2012</strong> </li>
            </ul>
        
        </div>

      </div>

    <div className="h-[3%]" style={{ backgroundColor: color }} >

    </div >

    </div>
  );
});

export default Cv;
