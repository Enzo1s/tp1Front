import React, { useState } from 'react'
import {ChevronLeftIcon} from '@primer/octicons-react'
import {ChevronRightIcon} from '@primer/octicons-react'

const carousels = ({noticias}) => {

  const [selected, setSelected] = useState(0)
  return (
    <div className='container'>
      {noticias && noticias.map((noticia, index) => (
        <div key={index}
        style={{display: index === selected ? 'block' : 'none'}}>
          <button style={{position: 'relative', top: '70px', left: '50px', backgroundColor: 'rgba(33, 194, 248, 0.2)', border: 'none', borderRadius: '50%', color:'white'}} onClick={() => setSelected(index-1 < 0 ? noticias.length-1 : index-1)}><ChevronLeftIcon/></button>
          <img
          className="d-block w-100"
          src={`http://localhost:8080/api/noticias/ver-archivo?path=${noticia?.imagen}`} 
          alt="Primera imagen"
        />
          <button style={{position: 'relative', top: '-695px', left: '1100px', backgroundColor: 'rgba(33, 194, 248, 0.2)', border: 'none', borderRadius: '50%', color:'white'}} onClick={() => setSelected(index+1 > noticias.length-1 ? 0 : index+1)}><ChevronRightIcon /></button>
        
      <div style={{ position: 'relative', top: '-700px', left: '500px', backgroundColor: 'rgba(33, 194, 248, 0.5)', width:'200px', textAlign:'center', color: 'white'}}>
        <h3>{noticia?.titulo}</h3>
        <p>{noticia?.resumen}</p>
      </div>
    </div>))}

    </div>
  )
}

export default carousels