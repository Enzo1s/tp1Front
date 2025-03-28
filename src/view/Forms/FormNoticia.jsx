import React, { useState } from 'react'
import HtmlEditor from '../../components/HtmlEditor'
import { useFormik } from 'formik'
import Header from '../../components/Header'
import { crearNoticia } from '../../api/noticias'

const FormNoticia = ({ empresa, setEmpresa }) => {

  const [imagen, setImagen] = useState(null)

  const formik = useFormik({
    initialValues: {
      titulo: '',
      resumen: '',
      contenido: '',
      fecha: '',
      imagen: ''
    },
    onSubmit: async (values) => {
      const noticia = new FormData()
      noticia.append('titulo', values.titulo)
      noticia.append('resumen', values.resumen)
      noticia.append('contenidoHTML', values.contenido)
      noticia.append('fecha', new Date(values.fecha))
      noticia.append('empresa', empresa.id)
      noticia.append('publicada', values.publicada ? 'Y':'N')
      noticia.append('imagen', imagen)
      const { data } = await crearNoticia(noticia)
      window.location.href = `/home/${empresa.id}`
    }
  })

  return (
    <div className="page">
      <Header empresa={empresa} setEmpresa={setEmpresa} />
      <div className="container">
        <h3>Crear Noticia</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label fs-4">Titulo</label>
            <input className="form-control" style={{ padding: '2px', height: '3rem' }}
              type="text"
              id='titulo'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.titulo} />
          </div>
          <div className="mb-3">
            <label className="form-label">Resumen</label>
            <input className="form-control" type="text" style={{ padding: '2px', height: '3rem' }}
              id='resumen'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.resumen} />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Fecha</label>
            <input className="form-control" style={{ padding: '2px', height: '3rem' }}
              type="date"
              id='fecha'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fecha} />
          </div>
          <div className="mb-3">
            <label className="form-label">Imagen</label>
            <input className="form-control" style={{ padding: '2px', height: '3rem' }}
              type="file"
              id='imagen'
              onChange={(event) => {
                setImagen(event.currentTarget.files[0])
                formik.handleChange(event)
              }}
              onBlur={formik.handleBlur}
              value={formik.values.imagen} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input"
            id='publicada'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.publicada}/>
              <label className="form-check-label" >Publicada</label>
          </div>
          <div className="mb-3" style={{ width: '50%' }}>
            <label>Contenido</label>
            <HtmlEditor formik={formik} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormNoticia;