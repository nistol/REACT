import React , {useState , useEffect} from 'react';
import axios from 'axios';
import OpinionItem from '../componentes/Nostros';

const OpinionesPage = (props) => {
   const [loading , setLoading]= useState(false);
   const [opinioes,setOpiniones] = useState ([]);

   useEffect(() => {
      const cargarOpiniones = async () => {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/opiniones`);
        setOpiniones(response.data);
        setLoading(false);
      };
      cargarOpiniones();
   } , []);
     return (
        <section className='holder'>
           <h2 className='holderh2'>Opiniones</h2>
           { loading ? (
              <p>Cargando...</p>
           ) : (
                   opinioes.map(item => <OpinionItem key = {item.id}
                    tittle = {item.titulo} subtittle = {item.subtiulo}
                    imagen = {item.imagen} body = {item.cuerpo}/> )
                   
           )}
        </section>

     );
}
export default OpinionesPage;