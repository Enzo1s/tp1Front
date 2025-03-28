import axios from "axios"

export const listadoNoticias = (search, id, size, page, sortType, direction) => {
  if(search){
    return axios.get(`http://localhost:8080/api/noticias/listado?size=${size}&page=${page}&sort=${sortType},${direction.toUpperCase()}&search=${search}&id=${id}`)
  }
    return axios.get(`http://localhost:8080/api/noticias/listado?size=${size}&page=${page}&sort=${sortType},${direction.toUpperCase()}&id=${id}`)
  }

  export const crearNoticia = (noticia) => {
    return axios.post('http://localhost:8080/api/noticias/guardar', noticia)
  }
  
  export const verNoticias = (id) => {
    return axios.get(`http://localhost:8080/api/noticias/ver?id=${id}`)
  }

  export const verImagen = (path) => {
    return axios.get(`http://localhost:8080/api/noticias/ver-archivo?path=${path}`)
  }

  export const listadoNoticiasEmpresa = (id, size, page, sortType, direction) => {
    return axios.get(`http://localhost:8080/api/noticias/listado?id=${id}&size=${size}&page=${page}&sort=${sortType},${direction.toUpperCase()}`)
  }