import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { listadoNoticiasEmpresa } from '../../api/noticias';
import '../../assets/css/style.css'
import '../../assets/css/search.css'
import '../../assets/css/camera.css'
import Header from '../../components/Header';
import MapRender from '../../components/MapRender';
import Carousels from '../../components/Carousels';

const Home = ({ empresa, setEmpresa }) => {
    const { id } = useParams();
    const [noticias, setNoticias] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const { data: noticias } = await listadoNoticiasEmpresa(id, 5, 0, 'fecha', 'DESC')
                setNoticias(noticias.content)
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [])

    return (
        <div>
            <div className="page">
                <Header empresa={empresa} setEmpresa={setEmpresa} />

                <main>
                    <section className="well well1 well1_ins1">
                <Carousels noticias={noticias}/>

                    </section>
                    <section className="well well2 wow fadeIn  bg1" data-wow-duration='3s'>
                    <button onClick={() => navigate('/noticia/crear')} className="btn btn-primary" style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}>Crear Noticia</button>
                    </section>
                    <section className="well well2 wow fadeIn  bg1" data-wow-duration='3s'>
                        <div className="container">
                            <h2 className="txt-pr">
                                Quienes Somos
                            </h2>
                            <div className="row">
                                <div className="col">
                                    <p style={{ textAlign: 'justify' }}>
                                        {empresa?.quienesSomos}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

                <footer className="top-border">
                    <section className="well well2 wow fadeIn  bg1" data-wow-duration='3s'>
                        <div className="container">
                            <h2 className="txt-pr">
                                Donde estamos
                            </h2>
                        </div>
                    </section>
                    <div className="map">

                        {empresa?.latitud && empresa?.longitud && 
                        <div style={{width:"1600px", height:"400px"}}>
                            <MapRender position={{lat: empresa?.latitud, lng: empresa?.longitud}} />
                        </div>
                        }
                    </div>

                    <section className="well1">
                        <div className="container">
                            <p className="rights">
                                {empresa?.denominacion}  &#169; <span id="copyright-year"></span>
                                <a href="index-5.html">Privacy Policy</a>
                            </p>
                        </div>
                    </section>
                </footer>
            </div>
        </div>
    )
}

export default Home