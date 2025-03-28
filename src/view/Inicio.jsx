import { useEffect, useState } from "react";
import { listadoEmpresa } from "../api/empresa";
import { useNavigate } from "react-router";

export default function Inicio({ setEmpresa }) {
  const [empresas, setEmpresas] = useState([])
  const navigate = useNavigate();

  const getEmpresas = async () => {
    try {
      const {data} = await listadoEmpresa()
      setEmpresas(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getEmpresas()
  }, [])
  
  return (
    <div>
      <table width="50%" align="center">
        <thead>
      <tr>
          <td width="50%">
            <b>EMPRESA</b>
          </td>
          <td>
            <b>VER PAGINA</b>
          </td>
        </tr>
        </thead>
        <tbody>
        {empresas.map((empresa) => (
          <tr key={empresa?.id}>
          <td>{empresa?.denominacion}</td>
          <td>
            <a style={{cursor: 'pointer'}} onClick={() => {setEmpresa(empresa); navigate(`/home/${empresa?.id}`)}}>URL PAGINA HOME</a>
          </td>
        </tr>
        ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/empresa/crear')}>Crear Empresa</button>
    </div>
  );
}
