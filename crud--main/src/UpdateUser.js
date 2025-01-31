import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../src/style/update.css";  // Import the new CSS file

function UpdateUser() {
    const { id } = useParams();
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
            .then(result => {
                console.log(result);
                setDescription(result.data.description);
                setCategory(result.data.category);
                setPrice(result.data.price);
                setStock(result.data.stock);
                setImage(result.data.image);
            })
            .catch(err => console.log(err));
    }, [id]); 

    const updateProduct = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:3001/updateUser/" + id, { description, category, price, stock, image })
            .then((result) => {
                console.log("Product updated successfully:", result.data);
                setDescription("");
                setCategory("");
                setPrice("");
                setStock("");
                setImage("");
                navigate('/'); 
            })
            .catch((err) => console.error("Error updating product:", err));
    };

    return (
        <div className="full-screen-center">
            <div className="form-container">
                <form onSubmit={updateProduct}>
                    <h2>Update Product</h2>
                    <div className="mb-2">
                        <label>Description</label>
                        <input 
                            type="text" 
                            placeholder="Enter product description" 
                            className="form-control"
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label>Category</label>
                        <input 
                            type="text" 
                            placeholder="Enter product category" 
                            className="form-control"
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label>Price</label>
                        <input 
                            type="number" 
                            placeholder="Enter product price" 
                            className="form-control"
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label>Stock</label>
                        <input 
                            type="number" 
                            placeholder="Enter product stock" 
                            className="form-control"
                            value={stock} 
                            onChange={(e) => setStock(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label>Image URL</label>
                        <input 
                            type="text" 
                            placeholder="Enter product image URL" 
                            className="form-control"
                            value={image} 
                            onChange={(e) => setImage(e.target.value)} 
                        />
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
