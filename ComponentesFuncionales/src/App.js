import './App.css';
import { Container, Typography } from '@mui/material';
import FormularioInsa from './componentes/Formulario';


function App() {
  const handleSubmit = (valores) => {
    console.log('APPJS: ', valores)
  }
  return (
      < Container component="section" maxWidth="sm">
        <Typography variant='h3' align='center'> Formulario de Registro </Typography> 
        <FormularioInsa handleSubmit={handleSubmit}/>  
      </Container>
  );
}

export default App;
