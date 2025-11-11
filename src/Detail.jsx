
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

export default function ProductDetail({ products }) {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    if (!product) return <p>Produit non trouvé</p>;

    return (
        <div className="container mt-4">
            <Link to="/" className="btn btn-secondary mb-3">← Retour</Link>
            <div className="row">
                <div className="col-md-6">
                    <img src={product.images[0]} alt={product.title} className="img-fluid" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                </div>
                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <h4 className="text-success">{product.price} $</h4>
                    <p><strong>Catégorie :</strong> {product.category.name}</p>
                    <p>{product.description}</p>
                    <button className="btn btn-success mt-3" onClick={handleAddToCart}>
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
}