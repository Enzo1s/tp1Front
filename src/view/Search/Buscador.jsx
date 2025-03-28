import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { useLocation } from 'react-router'
import { listadoNoticias } from '../../api/noticias'

const Buscador = ({empresa, setEmpresa}) => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const terminoDeBusqueda = searchParams.get('search');

    const [noticias, setNoticias] = useState({content: []})

    useEffect(() => {
      const getNoticias = async () => {
        const id = empresa ? empresa.id : JSON.parse( localStorage.getItem('empresa')).id
        const {data:listNoticias} = await listadoNoticias(terminoDeBusqueda,id, 20, 0, 'fecha', 'DESC')
        setNoticias(listNoticias)
      }
      getNoticias()
    }, [terminoDeBusqueda])
    
    return (
        <div className="page">
            <Header empresa={empresa} setEmpresa={setEmpresa}/>

            <main>

                <section className="well well4">

                    <div className="container">

                        <h2>
                            Texto Buscado
                        </h2>
                        <div className="row offs2">

                            <table width="90%" align="center">
                                <thead>
                                    <tr>
                                        <td>
                                            <h3>Resultado</h3>
                                        </td>
                                        
                                    </tr>
                                </thead>
                            </table>
                            <hr />
                            <table width="90%" align="center">
                                <tbody>
                                    {noticias.content.map((noticia, index) => 
                                    <tr key={noticia.id}>
                                        <td>
                                            <a href="detalle.html">
                                                <img width="250px" className="imgNoticia" src={`http://localhost:8080/api/noticias/ver-archivo?path=${noticia?.imagen}`} alt="" />
                                            </a>
                                        </td>
                                        <td width="25"></td>
                                        <td style={{textAlign:'justify'}} valign="top">
                                            <a style={{textAlign:'justify', fontSize:'20px'}} href={`detalle/${noticia.id}`}className="banner">
                                                {noticia.titulo}									</a>
                                            <div className="verOcultar">
                                                {noticia.resumen}<a href={`detalle/${noticia.id}`} style={{color:'blue'}}> Leer Mas - {noticia.fecha}</a>
                                            </div>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </table>


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

export default Buscador