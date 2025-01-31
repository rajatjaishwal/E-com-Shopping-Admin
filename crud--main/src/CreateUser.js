import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../src/style/ki.css"; // Import the CSS file
import { Link } from "react-router-dom";
function CreateUser() {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    const newProduct = { description, category, price, stock, image };

    axios
      .post("http://localhost:3001/createUser", newProduct)
      .then((result) => {
        console.log("Product created successfully:", result.data);
        setDescription("");
        setCategory("");
        setPrice("");
        setStock("");
        setImage("");
        navigate("/");
      })
      .catch((err) => console.error("Error creating product:", err));
  };

  return (
    <div className="bodys">
      <div className="form-container">
        <form onSubmit={Submit}>
          <h2 className="text-center">Add Product</h2>

          <div className="mb-2">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              value={description}
              placeholder="Enter product description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              value={category}
              placeholder="Enter product category"
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              value={price}
              placeholder="Enter product price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="stock">Stock</label>
            <input
              id="stock"
              type="number"
              value={stock}
              placeholder="Enter product stock quantity"
              className="form-control"
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              type="text"
              value={image}
              placeholder="Enter product image URL"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
        <div className=" last"> <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/admin" className="back">
          <button type="button" className="btns" style={{marginLeft :'12rem'}}>  
            Back
          </button>
          </Link></div>
          
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
