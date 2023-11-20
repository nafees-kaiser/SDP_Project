/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import styles from "./Order_History.module.css";
import axios from "axios";
import Navbar from "./Components/Navbar";
import CraftForm from "./Components/CraftForm";
import Footer from "./Components/Footer";
import Messaging from "./Messaging_buyer";

const Order_History = () => {
  const [messageset, setmessagesetter] = useState(false);
  const callbackmessage_land = (data) => {
    console.log("Land ", data);
    setmessagesetter(data);
  };
  const closemessage = () => {
    setmessagesetter(false);
  };
  const id = sessionStorage.getItem("buyer_id");
  const navigate = useNavigate();
  const [buyer, setBuyer] = useState({});
  const [buyerProducts, setBuyerProducts] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);

  // Fetch buyer information and cart products on component mount
  // useEffect(() => {

  // }, [id]);

  // Fetch order history when the buyer ID changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const buyerInfoResponse = await axios.get(`http://localhost:3000/get-buyer-info/${id}`);
        setBuyer(buyerInfoResponse.data.buyer);

        if (id) {
          const ordersResponse = await axios.get(`http://localhost:3000/api/orders/${id}`);
          setBuyerProducts(ordersResponse.data.orders);
          // Calculate total price if needed
          // setTotalPrice(calculateTotalPrice(ordersResponse.data.orders));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to calculate the total price of the orders
  const calculateTotalPrice = (orders) => {
    let total = 0;
    orders.forEach((order) => {
      total += order.totalPrice;
    });
    return total;
  };

  return (
    <>
      {id ? (
        <>
          <CraftForm callback2={callbackmessage_land} />
          {/* Display order history here using the buyerProducts state */}
          <div style={styles.container}>
            <h2 style={styles.heading}>Your Order History</h2>
            {buyerProducts.map((order) => (
              <div key={order._id} style={styles.orderContainer}>
                <p style={styles.orderId}>Order ID: {order._id}</p>
                <p style={styles.orderId}>Date: {order.date}</p>
                <p style={styles.orderId}>Total Bill: {order.totalPrice}</p>
                {order.product.map((product) => (
                  <div key={product.productId._id} style={styles.productContainer}>
                    <p style={styles.productName}>Name: {product.productId.productName}</p>
                    <p style={styles.productPrice}>Price: {product.productId.price} Taka</p>
                    {/*<p style={styles.productPrice}>Quantity: {product.productId.quantity}</p>*/}
                    <img src={product.productId.Product_img1} alt={product.productId.productName} style={styles.productImage} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <Navbar />
      )}

      {messageset && <Messaging closemessage={closemessage} />}
      <Footer />
    </>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #e0e0e0',
    marginBottom: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  orderContainer: {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  orderId: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  productContainer: {
    marginBottom: '15px',
  },
  productName: {
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#333',
  },
  productImage: {
    maxWidth: '100px',
    maxHeight: '100px',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

export default Order_History;
