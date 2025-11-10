
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Nav({ setSearchTerm }) {
    const cartItems = useSelector(state => state.cart);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(90deg, #333 0%, #555 100%)', boxShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            <div className="container-fluid">
                <Link className="navbar-brand text-white fw-bold" to="/" style={{ fontSize: '1.5rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    Noblesse
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ borderColor: '#fff' }}>
                    <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffcc00'} onMouseOut={(e) => e.target.style.color = '#fff'}>
                                Accueil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/Categorie" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffcc00'} onMouseOut={(e) => e.target.style.color = '#fff'}>
                                Catégories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/login" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffcc00'} onMouseOut={(e) => e.target.style.color = '#fff'}>
                                Connexion
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex me-3">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Rechercher..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ borderRadius: '20px', border: 'none', backgroundColor: '#f8f9fa', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
                        />
                    </form>
                    <Link to="/cart" className="btn btn-warning position-relative fw-bold" style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                        Panier
                        {totalItems > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.8rem' }}>
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
