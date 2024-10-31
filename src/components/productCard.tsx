interface Props {
    image: string
    title: string
    price: number
    description: string
}

export default function ProductCard({ image, title, price, description }: Props) {
    return (
        <div className="card col-lg-3 mx-3 my-2 text-light" style={{ backgroundColor: ' #312617', border: '2px solid gray' }}>
            <img className="card-img-top" height={300} src={`http://localhost:3000/uploads/${image}`} alt="..." />
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{title}</h5>
                    <small>{price}<i className="bi bi-coin text-warning"></i></small>
                </div>
                <p className="card-text">{description}</p>
                <a href="#" className="btn text-light btn-light text-dark">add to cart</a>
            </div>
        </div>
    )
}
