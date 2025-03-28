import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../assets/css/search.css'
import '../assets/css/camera.css'
import { useNavigate } from 'react-router'

const Header = ({ empresa, setEmpresa }) => {

    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleSearch = () => {
        if (searchValue.trim()) {
            window.location.href = `/buscador?search=${searchValue}`
        }
    }

    useEffect(() => {
        if (!empresa) {
            const empresaLoca = JSON.parse( localStorage.getItem('empresa'))
            setEmpresa(JSON.parse( localStorage.getItem('empresa')))
        }
    }, [])

    return (
        <header>
            <div className="container top-sect">
                <div className="navbar-header">
                    <h1 className="navbar-brand">
                        <a data-type='rd-navbar-brand' href="./"><small>{empresa?.denominacion}</small></a>
                    </h1>
                    <a className="search-form_toggle" href="#"></a>
                </div>

                <div className="help-box text-right">
                    <p>Telefono</p>
                    <a href="callto:#">{empresa?.telefono}</a>
                    <small><span>Horario:</span> {empresa?.horarioAtencion}</small>
                </div>
            </div>

            <div id="stuck_container" className="stuck_container">
                <div className="container">
                    <nav className="navbar navbar-default navbar-static-top pull-left">
                        <div className="">
                            <ul className="nav navbar-nav sf-menu sf-js-enabled sf-arrows" data-type="navbar">
                                <li style={{ listStyle: 'none' }} className="active">
                                    <a href={`/home/${empresa?.id}`}>INICIO</a>
                                </li>
                                <li style={{ listStyle: 'none' }}>
                                    <a href={"/"}>LISTA EMPRESAS</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <form className="search-form" acceptCharset="utf-8" onSubmit={(e) => e.preventDefault()}>
                        <label className="search-form_label">
                            <input className="search-form_input" type="text" name="buscar" autoComplete="off"
                                value={searchValue}
                                onChange={handleInputChange} placeholder="Ingrese Texto" />
                            <span className="search-form_liveout"></span>
                        </label>
                        <button className="search-form_submit fa-search" type="button" onClick={handleSearch}></button>
                    </form>

                </div>

            </div>

        </header>
    )
}

export default Header