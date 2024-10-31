import { useState } from 'react'
import logo from '/logo.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#312617' }}>
            <div className="container-fluid">
                <Link to='/' className="navbar-brand fs-2"><img src={logo} alt="" width={170} height={80} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to='/' className="nav-item fs-5 text-decoration-none">
                            <a className="nav-link" aria-current="page" href="#">Items</a>
                        </Link>
                        <Link to='/about' className="nav-item fs-5 text-decoration-none">
                            <a className="nav-link" href="#">About</a>
                        </Link>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to='/category/Sword' className="dropdown-item">Swords</Link></li>
                                <li><Link to='/category/Shield' className="dropdown-item">Shields</Link></li>
                                <li><Link to='/category/Dagger' className="dropdown-item">Daggers</Link></li>
                                <li><Link to='/category/Bow' className="dropdown-item">Bows</Link></li>
                                <li><Link to='/category/Armor' className="dropdown-item">Armor</Link></li>
                            </ul>
                        </li>
                        <Link to='/cart' className="nav-item fs-5 text-decoration-none">
                            <a className="nav-link" href="#">Cart</a>
                        </Link>
                    </ul>
                    <div className='d-flex'>
                        <div className="input-group mb-3 mx-3">
                            <input type="text" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search" />
                            <button className="btn btn-outline-light text-dark" style={{ backgroundColor: 'rgb(220,185,127)' }} onClick={() => { navigate(`/search/${search}`) }} type="button" id="button-addon2">Search</button>
                        </div>
                        <i className="bi bi-box-arrow-right fs-5 text-light mx-1"></i><Link to='/login' className='text-decoration-none nav-item fs-5 text-light'>login</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
