import { Component } from "react";


class ClaseComponente extends Component{

    constructor()
    {
        super();
        this.state={contador:0};
    }

    render()
    {
        return <div>
            Vamos a darle Clase Componente
            <p>
                <button onClick={ () => this.setState( {contador:this.state.contador -1})} >-</button>
                {this.state.contador}
                <button onClick={ () => this.setState( {contador:this.state.contador +1})} >+</button>
            </p>
        </div>
    }

}

export default ClaseComponente;