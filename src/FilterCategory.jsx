
import { useEffect, useState } from 'react';
import Card from "./Card";

export default function Categorie(props) {
    const [filtered, setFiltered] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (props.prodact && props.prodact.length > 0) {
            setFiltered(props.prodact);
            const cats = [...new Set(props.prodact.map(p => p.category.name))];
            setCategories(cats);
        }
    }, [props.prodact]);

    function filterCategorie(e) {
        const value = e.target.value;
        if (value === "all") {
            setFiltered(props.prodact);
        } else {
            const filtred = props.prodact.filter(p => p.category.name === value);
            setFiltered(filtred);
        }
    }

    return (
        <div className="container mt-4">
            <h3>Filtrer par catégorie</h3>

            <select onChange={filterCategorie} className="form-select mb-3" style={{ width: '250px' }}>
                <option value="all">Toutes les catégories</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>

            <Card products={filtered} />
        </div>
    );
}