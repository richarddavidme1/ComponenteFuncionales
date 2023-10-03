import { useState } from "react";

function FuncionComponente()
{
    const [value,setvalue]=useState(0)
    return <div>
        Funcion Componente
        <p>
            <button onClick={ () => setvalue(value -1) }>-</button>
             {value}
            <button onClick={ () => setvalue(value +1) }>+</button>
        </p>
    </div>

};

export default FuncionComponente;