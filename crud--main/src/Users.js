import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../src/style/User.css";  // Import the new CSS file

function Users() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setProducts(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="full-screen-center">
            <div className="container-box">
                <div className="btn-container">
                    <Link to="/create" className="btn btn-success w-100">Add +</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Date Added</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}> {/* Assuming each product has a unique _id */}
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>{product.dateAdded}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link to={`/Update/${product._id}`} className="btn btn-success">Update</Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
