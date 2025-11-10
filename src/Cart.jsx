
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from './cartSlice';

export default function Cart() {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        
        alert("Fonctionnalité de paiement à implémenter.");
    };

    return (
        <div className="container mt-4">
            <h2>Votre Panier</h2>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide. <Link to="/">Continuer les achats</Link></p>
            ) : (
                <>
                    <div className="row">
                        {cartItems.map((item) => (
                            <div key={item.id} className="col-md-12 mb-3">
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-2">
                                            <img src={item.images[0]} alt={item.title} className="img-fluid rounded-start" style={{ height: '100px', objectFit: 'contain' }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">{item.price} $</p>
                                                <div className="d-flex align-items-center">
                                                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                                                    <span>Quantité: {item.quantity}</span>
                                                    <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => dispatch(increaseQuantity(item))}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex align-items-center">
                                            <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item))}>Supprimer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <h4>Total: {totalPrice.toFixed(2)} $</h4>
                        <button className="btn btn-primary me-2" onClick={handleCheckout}>Passer la commande</button>
                        <button className="btn btn-warning me-2" onClick={() => dispatch(clearCart())}>Vider le panier</button>
                        <Link to="/" className="btn btn-secondary">Continuer les achats</Link>
                    </div>
                </>
            )}
        </div>
    );
}