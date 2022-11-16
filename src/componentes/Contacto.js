import {useState} from 'react';
import axios from 'axios';

const Contacto = (props) => {
     
     const initialform = {
       nombre:'',
       email:'',
       telefono:'',
       mensaje:''
     }

     const [sending,setSending] = useState(false);
     const [msg,setMsg] = useState('');
     const [formData,setFormData] = useState(initialform);

     const handleChange = e =>{
        const {name , value }= e.target;
        setFormData(oldData => ({
          ...oldData,
          [name]:value
        }));
      }
        const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`,formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
          setFormData(initialform)
        }
      }
    
    return (
        <div class="container-fluid" id="contacto">
        <div class="row con">
          <h2 class="text-center" id="datos">Datos de Contacto</h2>
          <div class="col">
            <div class="cont">
              <ul class="contf">
                <li class="contf"><b>Whatsapp</b> : +54 11 6960-0225</li>
                <li class="contf">
                  <b>Instagram</b>: https://www.instagram.com/tuconexion88
                </li>
                <li class="contf"><b>Direccion</b>: Bartolome mitre 2296</li>
              </ul>
            </div>
          </div>
          <div class="col">
          <iframe
              class="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8278105583763!2d-58.3990046!3d-34.6085154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccae941056d57%3A0xe766fedfaa0f4f28!2sBartolom%C3%A9%20Mitre%202296%2C%20C1039%20AAJ%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1660762183327!5m2!1ses-419!2sar"
              width="600"
              height="450"
              
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="row forms">
          <div class="col">
            <h2 class="text-center">Formulario de Contacto</h2>
            <form class="row g-3" action='/' method='post' onSubmit= {handleSubmit}>
              <div class="col-md-12">
                <label for="inputnombre" class="form-label"
                  >Nombre y apellido</label
                >
                <input
                  type="text"
                  class="form-control bg-dark white"
                  id="inputnombre"
                  placeholder="ingrese su nombre"
                  required
                  name="nombre"
                  value={formData.nombre}
                  onChange= {handleChange}
                />
              </div>

              <div class="col-12">
                <label for="inputemail" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control bg-dark white"
                  id="inputemail"
                  placeholder="xxxx@gmail.com"
                  required
                  name="mail"
                  value={formData.mail}
                  onChange= {handleChange}
                />
              </div>
              <div class="col-12">
                <label for="inputcelular" class="form-label">Celular</label>
                <input
                  type="tel"
                  class="form-control bg-dark white"
                  id="inputcelular"
                  placeholder="ingrese su numero"
                  required
                  name="telefono"
                  value={formData.telefono}
                  onChange= {handleChange}
                />
              </div>
              <div class="col-md-6">
                <label for="inputcomentarios" class="form-label">
                  Comentarios y/o Sugerencias</label
                >
                <textarea
                  class="bg-dark form-control"
                  id="inputcomentarios"
                  cols="25"
                  rows="5"
                  name ="comentario"
                  value={formData.comentario}
                  onChange= {handleChange}
                ></textarea>
              </div>
              <div class="col-12 enviar">
                <button type="submit" class="btn btn-primary">Enviar</button>
              </div>
            </form>
            {sending ? <p>Enviando...</p> :null}
            {msg ? <p>{msg}</p>:null}
          </div>

          <div class="row">
            <div class="col">
              <div class="what" id="whats">
                <a href="https://walink.co/7c3d4d" target="_blank"
                  ><img
                    src="./images/whatsppicon.png"
                    alt="what"
                /></a>
              </div>
            </div>
            <div class="col">
              <div class="insta" id="instas">
                <a
                  href="https://www.instagram.com/tuconexion88/"
                  target="_blank"
                  ><img
                    src="./images/instagram.png"
                    alt="what"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); }
          
          
export default Contacto;