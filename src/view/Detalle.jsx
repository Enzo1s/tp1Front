import React, { useEffect, useState } from 'react'
import { verNoticias } from '../api/noticias';
import Header from '../components/Header';
import { useParams } from 'react-router';

const Detalle = ({empresa, setEmpresa}) => {

    const { id } = useParams();
    const [noticia, setNoticia] = useState(null)

    useEffect(() => {
      const getData = async () => {
        try {
          const {data} = await verNoticias(id)
          setNoticia(data);
        } catch (error) {
          console.error(error);
        }
      }
      getData();
 
    }, [])
    
  return (
  <div className="page">
    <Header empresa={empresa} setEmpresa={setEmpresa}>
    </Header>

    <main>        

      <section className="well well4">
		
        <div className="container">
			<center>
				<div id="imagenPrincipal" style={{height: '450px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
					<div style={{textAlign:'left', backgroundColor: 'rgba(1,1,1,0.5)', color: '#ffffff',fontSize: '16px', lineHeight: '50px'}}>
          {noticia?.titulo}
					</div>
				</div>
			</center>
		  <h2>
            {noticia?.titulo}
          </h2>
		  Fecha Publicacion: {noticia?.fecha}
		  <hr />
          <div className="row offs2">
            
            <div className="col-lg-12">
              <dl className="terms-list">
                <dt>
					{noticia?.resumen}
                </dt>
				<hr />
                <dd>
               <div dangerouslySetInnerHTML={{ __html: noticia?.contenidoHTML }} />
				</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>   
      

    </main>

  <footer>
   <section className="well">
      <div className="container"> 
            <p className="rights">
              {empresa?.denominacion}  &#169; <span id="copyright-year"></span>
              <a href="index-5.html">Privacy Policy</a>
            </p>           
      </div> 
    </section>    
  </footer>
  </div>
  )
}

export default Detalle