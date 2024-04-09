import React, { useState } from 'react';
import './pages.css';

function Product() {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([
        { id: 1, name: 'T-shirt', quantity: 10, price: 15.99 },
        { id: 2, name: 'Jeans', quantity: 20, price: 29.99 }
    ]);

    // Function to handle adding a new product
    function handleAddProduct() {
        window.location.href = '/addProduct';
        console.log('Add new product');
    }

    return (
        <div className="product-container">
            <h2>Product Management</h2>
            <div className="search-button-container">
                <input
                    type="text"
                    placeholder="Search for clothes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleAddProduct}>Add Clothes</button>
            </div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>
                                <button onClick={() => handleUpdate(product.id)}>Update</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    function handleUpdate(productId) {

        console.log('Update product with ID:', productId);
    }

    function handleDelete(productId) {
        console.log('Delete product with ID:', productId);
    }
    }
export default Product;
