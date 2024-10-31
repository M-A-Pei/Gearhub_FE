import { Controller, useForm } from "react-hook-form"
import api from "../api/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function Admin() {
    const navigate = useNavigate()
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            name: "",
            category: "",
            description: "",
            price: 0,
            image: ""
        }
    })

    async function submit(e: any) {
        const formData = new FormData()
        formData.append("name", e.name)
        formData.append("category", e.category)
        formData.append("description", e.description)
        formData.append("price", e.price)
        formData.append("image", e.image)
        console.log("formData", formData)
        try {
            await api.post("/product", formData)
            toast.success("item is now up for sale")
            navigate("/")
            reset()
        } catch (error) {
            console.log("error", error)
            toast.error("something went wrong")
        }
    }
    return (
        <div className="d-flex align-items-center flex-column mt-4 col-lg-5 m-auto border p-3 border-dark rounded border-3" style={{ backgroundColor: 'rgb(49,38,23, 0.2)' }}>
            <h1>Admin Panel</h1>
            <p>sell new items</p>
            <form onSubmit={handleSubmit(submit)} className="w-100">
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) =>
                        <input {...field} type="text" className="form-control mb-3" placeholder="item name" />
                    }
                />
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) =>
                        <select {...field} className="form-select mb-3" aria-label="Default select example">
                            <option selected>Category</option>
                            <option value="Sword">Sword</option>
                            <option value="Shield">Shield</option>
                            <option value="Dagger">Dagger</option>
                            <option value="Bow">Bow</option>
                            <option value="Wand">Wand</option>
                            <option value="Armor">Armor</option>
                        </select>
                    }
                />
                <Controller
                    name="image"
                    control={control}
                    render={({ field }) =>
                        <>
                            <label htmlFor="image" className="btn btn-outline-dark mb-3">choose image</label>
                            <input onChange={(e) => field.onChange(e.target.files?.[0])} type="file" id="image" className="d-none" placeholder="image" />
                        </>
                    }
                />
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) =>
                        <textarea {...field} rows={5} className="form-control mb-3" placeholder="description" />
                    }
                />
                <Controller
                    name="price"
                    control={control}
                    render={({ field }) =>
                        <input {...field} type="number" className="form-control mb-3" placeholder="price" />
                    }
                />
                <button className="btn btn-outline-dark text-light w-100" type="submit" style={{ backgroundColor: '#312617' }}>Sell item</button>
            </form>
        </div>
    )
}
