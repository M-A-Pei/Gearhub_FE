import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function Login() {
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function submit() {
        if (password === 'admin') {
            toast.success("login success")
            navigate('/admin')
        } else {
            toast.error("wrong password")
        }
    }

    return (
        <div className="text-center mt-4 col-lg-5 m-auto">
            <h1>login as admin</h1>
            <div className="input-group mb-3">
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="btn btn-outline-dark" onClick={submit} type="button" id="button-addon2">Submit</button>
            </div>
        </div>
    )
}
