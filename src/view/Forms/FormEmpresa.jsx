import React from 'react'
import { crearEmpresa } from '../../api/empresa'
import { useFormik } from 'formik'

const FormEmpresa = () => {

    const formik = useFormik({
      initialValues: {
        denominacion: '',
        telefono: '',
        horarioAtencion: '',
        quienesSomos: '',
        longitud: '',
        latitud: '',
        domicilio:'',
        email:''
      },
      onSubmit: async (values) => {
        const { data } = await crearEmpresa(values)
         window.location.href = `/`
      }
    })
  
    return (
      <div className="page">
        
        <div className="container">
          <h3>Crear Empresa</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label className="form-label fs-4">denominación</label>
              <input className="form-control" style={{ padding: '2px', height: '3rem' }}
                type="text"
                id='denominacion'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.denominacion} />
            </div>
            <div className="mb-3">
              <label className="form-label">telefono</label>
              <input className="form-control" type="number" style={{ padding: '2px', height: '3rem' }}
                id='telefono'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telefono} />
            </div>
            
            <div className="mb-3">
              <label className="form-label">quienes Somos</label>
              <input className="form-control" style={{ padding: '2px', height: '3rem' }}
                type="text"
                id='quienesSomos'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.quienesSomos} />
            </div>
            <div className="mb-3">
              <label className="form-label">Latitud</label>
              <input className="form-control" style={{ padding: '2px', height: '3rem' }}
                type="number"
                id='latitud'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.latitud} />
            </div>

            <div className="mb-3">
              <label className="form-label">Longitud</label>
              <input className="form-control" style={{ padding: '2px', height: '3rem' }}
                type="number"
                id='longitud'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.longitud} />
            </div>
            <div className="mb-3">
              <label className="form-label">domicilio</label>
              <input className="form-control" style={{ padding: '2px', height: '3rem' }}
                type="text"
                id='domicilio'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.domicilio} />
            </div>
            <div className="mb-3">
              <label className="form-label">horarioAtencion</label>
              <input className="form-control" style={{ padding: '2px', height: '3rem' }}
                type="text"
                id='horarioAtencion'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.horarioAtencion} />
            </div>
            <div className="mb-3">
              <label className="form-label">email</label>
              <input className="form-control" style={{ padding: '2px', height: '3rem' }}
                type="text"
                id='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} />
            </div>
            <button type='submit' className="btn btn-primary">Crear</button>
          </form>
        </div>
      </div>
    )
}

export default FormEmpresa