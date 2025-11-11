
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

export default function Card(props) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {props.products.map((p, i) => (
                    <div key={i} className="col-md-4 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={p.images[0]} className="card-img-top" alt={p.title} style={{ height: "250px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text">
                                    {`${p.description.slice(0, 50)}...`}
                                </p>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/product/${p.id}`} className="btn btn-primary">
                                        Voir le produit
                                    </Link>
                                    <button className="btn btn-success" onClick={() => handleAddToCart(p)}>
                                        Ajouter au panier
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}