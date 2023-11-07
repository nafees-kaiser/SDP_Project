import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import styles from "./Confirmation1.module.css";
import "jspdf-autotable";
import { useParams } from "react-router-dom";

const Confirmation1 = () => {
  const [buyerInfo, setBuyerInfo] = useState({});
  const [buyerProducts, setBuyerProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);



  
  // Fetch buyer information and products
  const { order_id } = useParams();
  console.log(order_id);
  // Replace the following with your actual data
  useEffect(() => {
    setBuyerInfo({ name: "John Doe", email: "johndoe@example.com" });
    setBuyerProducts([
      { productName: "Product 1", price: 50, quantity: 2 },
      { productName: "Product 2", price: 30, quantity: 1 },
    ]);
    setTotalPrice(130);
  }, []);




  const generatePdf = () => {
    const doc = new jsPDF();
    let yPos = 20;

    // Add image
    const imgData = "./images/384165997_332969559130939_1111385360839973004_n.png"; 
    const imgWidth = 50;
    const imgHeight = 20;
    const imgX = (doc.internal.pageSize.getWidth() - imgWidth) / 2;
    doc.addImage(imgData, "PNG", imgX, yPos, imgWidth, imgHeight);

    // Adjust the yPos after adding the image
    yPos += imgHeight + 10;
  
    // Add Title and Subtitle
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Heritage Craft Connect", 105, yPos, null, null, "center");
    doc.setFontSize(14);
    yPos += 10;
    doc.text("Product Bill", 105, yPos, null, null, "center");
    doc.setFont("helvetica", "normal");
    yPos += 20;

    //Date and Time
    const now = new Date();
    const date = `Date: ${now.toLocaleDateString()}`;
    const time = `Time: ${now.toLocaleTimeString()}`;
    doc.setFontSize(12);
    doc.text(20, yPos, date);
    yPos += 10;
    doc.text(20, yPos, time);
    yPos += 20;
  
    // Add buyer information
    doc.setFont("helvetica", "bold");
    doc.text(20, yPos, "Buyer Information");
    doc.setFont("helvetica", "normal");
    yPos += 10;
    doc.text(20, yPos, `Name: ${buyerInfo.name}`);
    yPos += 10;
    doc.text(20, yPos, `Email: ${buyerInfo.email}`);
    yPos += 20;
  
    // Add buyer products
    doc.setFont("helvetica", "bold");
    doc.text(20, yPos, "Buyer Products");
    doc.setFont("helvetica", "normal");
    yPos += 10;
  
    // Table Headers
    const headers = [["Product Name", "Price", "Quantity"]];
    const data = buyerProducts.map((product) => [product.productName, product.price, product.quantity]);
  
    doc.autoTable({
      startY: yPos,
      head: headers,
      body: data,
    });
  
    // Calculate total price
    const totalY = doc.previousAutoTable.finalY + 10;
    doc.text(20, totalY, `Total Price: ${totalPrice}`);
    yPos = totalY + 10;
  
    // Save the PDF
    doc.save("Bill.pdf");
  };

  return (
    <>
      <Navbar />
      <div className={styles.confirmation}>
        <img
          className={styles.duotonecheckcircleIcon}
          alt=""
          src="/duotonecheckcircle1.svg"
        />
        <div className={styles.yourOrderIsConfirmedParent}>
          <div className={styles.yourOrderIs}>Your order is Confirmed</div>
          <div className={styles.thanksForPurchasing}>{`Thanks for purchasing. `}</div>
        </div>
        <button className={styles.button} id="pdf_button" onClick={generatePdf}>
          <img
            className={styles.regularstackIcon}
            alt=""
            src="/regularstack.svg"
          />
          <div className={styles.label}>Download BILL</div>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation1;
