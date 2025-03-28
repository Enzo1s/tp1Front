import axios from 'axios'

export const listadoEmpresa = () => {
  return axios.get('http://localhost:8080/api/empresa/listado')
}

export const verEmpresa = (id) => {
  return axios.get(`http://localhost:8080/api/empresa/ver?id=${id}`)
}

export const crearEmpresa = (empresa) => {
  return axios.post('http://localhost:8080/api/empresa/guardar', empresa)
}