import * as React from 'react';
import { Button , Switch } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { useState ,useEffect } from 'react';


function FormularioInsa({ handleSubmit })
{
    const [nombre ,setNombre]=useState(" ");
    const [apellido ,setApellido]=useState(" ");
    const [correo ,setCorreo]=useState(" ");
    const [prom ,setProm]=useState(true);
    const [nove ,setNove]=useState(true);

    const [errors, setErrors] = useState({
      name: {
        error: false,
        message:
          "Deben ser al menos 3 caracteres",
      },
    })

    function validarNombre(nombre) 
    {
      if (nombre.length > 3) 
      {
        return {name: {error: false,message: "",},}
      } else 
      {
        return {name: {error: true,message:"Deben ser al menos 3 caracteres",},}
      }
    }
  

    useEffect( ()=>{
      console.log("Nombre: ",nombre)
    },[nombre])
    return <form  onSubmit={ (e) =>{ e.preventDefault() 
                           console.log({nombre,apellido,correo,prom,nove})
          }}>
             <TextField id="name" label="Nombre" variant="outlined" fullWidth margin='normal'
                        onChange={(e)=>{ console.log(e.target.value)
                                          setNombre(e.target.value)}} 
                                          value={nombre} 
                                          error={errors.name.error}
                                          helperText={errors.name.error ? errors.name.message: ""}
                                          onBlur={(e) => {setErrors(validarNombre(e.target.value))}}
              />

             <TextField id="lastname" label="Apellido" variant="outlined" fullWidth margin='normal' 
                        onChange={(e)=>{ 
                          setApellido(e.target.value)}} 
                          value={apellido} 
              />
             <TextField id="email" label="Correo Electronico" variant="outlined" fullWidth margin='normal'  
                        onChange={(e)=>{ 
                          setCorreo(e.target.value)}} 
                          value={correo} 
             
             />
             <FormGroup>
                <FormControlLabel control={<Switch 
                        checked={prom} 
                        onChange={(e)=>{ 
                        setProm(e.target.checked)}} 
                         />
                        } 
                        label="Promociones"    
                 />
                <FormControlLabel control={<Switch 
                          checked={nove} 
                          onChange={(e)=>{ 
                          setNove(e.target.checked)}}  
                          />} 
                          label="Novedades" 
                        
                />
             </FormGroup>
             <Button variant="contained" type='submit' >Registrar</Button>
           </form>
};

export default FormularioInsa;