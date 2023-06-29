// Importaciones
import axios from 'axios';

// Creacion del cliente Axios
const clienteFrontend = axios.create({
    // URL de donde esta el servidor del backend
    baseURL: `http://localhost:4000`
});

// Exportamos el cliente
export default clienteFrontend;