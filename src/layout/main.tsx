import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

export default function Main() {
    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <Outlet />
            </div>
        </>
    )
}
