import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";
import axios from "axios";
import Navbar from "./Components/Navbar";
import CraftForm from "./Components/CraftForm"
import Footer from "./Components/Footer";
import CraftForm from "./Components/CraftForm";

const Checkout = () => {
    const [buyer, setBuyer] = useState({});
    // const [products, setProducts] = useState({});
    const [buyerProducts, setBuyerProducts] = useState([]);
    let [totalPrice, setTotalPrice] = useState(0)
    const id = sessionStorage.getItem("buyer_id");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3000/get-buyer-info/${id}`)
            .then((response) => {
                // console.log(response.data.products);
                setBuyer(response.data.buyer);
                if (response.data.cartProducts) {
                    // setProducts(response.data.products[0]);
                    // const extractedProducts = response.data.products.map(item => item.product);
                    setBuyerProducts(response.data.cartProducts);
                    // console.log(response.data.cartProducts);
                }

            })
    }, []);
    let total = 0
    buyerProducts.forEach(p=>{
        total += p.productId.price * p.quantity;
    })
    useEffect(()=>{
        console.log(total);
        setTotalPrice(total);
    },[total])

    // const buyerProducts = extractedProducts[0];
    // console.log(buyerProducts[0]);
    const updateProduct = () => {
        let product = [];
        let total = 0;
        // const order = {}
        buyerProducts.forEach(p => {
            product.push({ productId: p.productId._id, quantity: p.quantity });
            total += p.productId.price * p.quantity;
        })
        const orderData = {
            product: product,
            buyerId: id,
            totalPrice: total
        }
        console.log("a")
        console.log(orderData);
        const saveData = async () => {

            const response = await axios.post(`http://localhost:3000/get-buyer-info/${id}`, orderData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            return response.status;
            // .then((response) => {
            //     // if (response) navigate('/confirmation');
            // })
            // .catch((error) => {
            //     console.log(error);
            // });
        }
        const deleteData = async () => {
            const response = await axios.delete(`http://localhost:3000/get-buyer-info/${id}`);
            return response.status;
        }
        if (saveData() === 200) {
            navigate('/confirmation');
        }
    }

    return (
        <>
            {id ? <CraftForm /> : <Navbar />}
            <div className={styles.checkout}>
                <div className={styles.contactInfoFrame} id="contact_info">
                    <div className={styles.contactInformation}>Contact Information</div>
                    <div className={styles.emailAddress}>
                        <span>Email Address</span>
                        <span className={styles.span}>*</span>
                    </div>
                    <div className={styles.fullName}>
                        <span>Full Name</span>
                        <span className={styles.span}>*</span>
                    </div>
                    <input
                        className={styles.inputEmail}
                        name="email_input"
                        value={buyer.email}
                        placeholder="Email address"
                        type="text"
                    />
                    <input
                        className={styles.inputName}
                        name="name_input"
                        value={buyer.name}
                        placeholder="Name"
                        type="text"
                    />
                    <div className={styles.phone}>
                        <span>Phone</span>
                        <span className={styles.span}>*</span>
                    </div>
                    <input
                        className={styles.inputEmail1}
                        name="phone_input"
                        value={buyer.mobileNumber}
                        placeholder="Phone number"
                        type="text"
                    />
                </div>
                <div className={styles.shippingAddressFrame} id="Shipping Address">
                    <input
                        className={styles.inputStreet}
                        name="input_street"
                        value={buyer.area}
                        placeholder="Area"
                        type="text"
                    />
                    <div className={styles.area}>Area*</div>
                    <div className={styles.area}>
                        <span>Area</span>
                        <span className={styles.span}>*</span>
                    </div>
                    <div className={styles.district}>
                        <span>{`District `}</span>
                        <span className={styles.span}>*</span>
                    </div>
                    <input
                        className={styles.inputDistrict}
                        name="input_district"
                        value={buyer.district}
                        placeholder="District"
                        type="text"
                    />
                    <div className={styles.division}>
                        <span>{`Division `}</span>
                        <span className={styles.span}>*</span>
                    </div>
                    <input
                        className={styles.inputDivision}
                        name="input_division"
                        value={buyer.division}
                        placeholder="Division"
                        type="text"
                    />
                    <div className={styles.shippingAddress}>Shipping Address</div>
                </div>
                <div className={styles.policyText}>
                    <span>{`Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our `}</span>
                    <span className={styles.privacyPolicy}>privacy policy</span>
                    <span>.</span>
                </div>
                <button className={styles.placeOrderButton} onClick={updateProduct}>
                    <img
                        className={styles.iconarrowRight}
                        alt=""
                        src="/images/iconarrowright4.svg"
                    />
                    <div className={styles.getStarted}>Place order</div>
                    <img
                        className={styles.iconarrowRight}
                        alt=""
                        src="/images/iconarrowright4.svg"
                    />
                </button>
                {/* <Button
                    text="Place order"
                    onClick = {updateProduct}
                /> */}
                <div className={styles.selectedItems} id="items">
                    {buyerProducts && buyerProducts.map(item => {
                        const { productId, quantity } = item;
                        // setTotalPrice(totalPrice += parseFloat(productId.price)*parseFloat(quantity));
                        return (
                            <div key={productId._id} className={styles.product2}>
                                <div className={styles.product2Child} />
                                <img
                                    className={styles.tablercurrencyTakaIcon}
                                    alt=""
                                    src="/images/tablercurrencytaka1.svg"
                                />
                                <img
                                    className={styles.product2Item}
                                    alt=""
                                    src="/images/rectangle-42@2x.png"
                                />
                                <button className={styles.trash} id="cancel_button">
                                    <img className={styles.trashChild} alt="" src="/images/vector-8.svg" />
                                    <img className={styles.trashItem} alt="" src="/images/vector-8.svg" />
                                    <img className={styles.trashInner} alt="" src="/images/rectangle-41.svg" />
                                    <div className={styles.ellipseDiv} />
                                </button>
                                <div className={styles.div}>{productId.price}</div>
                                <img
                                    className={styles.jumpTimeDuotoneLineIcon}
                                    alt=""
                                    src="/images/jump-time-duotone-line.svg"
                                />
                                <div className={styles.gazipurdhaka}>
                                    <p className={styles.blankLine}>{`${productId.district}, ${productId.division}`}</p>
                                    <p className={styles.blankLine}>&nbsp;</p>
                                    <p className={styles.blankLine}>&nbsp;</p>
                                    <p className={styles.blankLine}>&nbsp;</p>
                                    <p className={styles.blankLine}>&nbsp;</p>
                                    <p className={styles.blankLine}>&nbsp;</p>
                                    <p className={styles.blankLine}>&nbsp;</p>
                                </div>
                                <b className={styles.benaroshiSaree}>{productId.productName}</b>
                                <div className={styles.component71}>
                                    <button className={styles.minus} id="minus_button" />
                                    <div className={styles.count}>{quantity}</div>
                                    <button className={styles.plus} id="plus_button" />
                                    <img
                                        className={styles.component71Child}
                                        alt=""
                                        src="/images/group-14701.svg"
                                    />
                                    <img
                                        className={styles.path7Copy6}
                                        alt=""
                                        src="/images/path-7-copy-6.svg"
                                    />
                                </div>
                            </div>
                        );

                    })}
                    {/* <div className={styles.product2}>
                    <div className={styles.product2Child} />
                    <img
                    className={styles.tablercurrencyTakaIcon}
                    alt=""
                    src="/images/tablercurrencytaka1.svg"
                    />
                    <img
                    className={styles.product2Item}
                    alt=""
                    src="/images/rectangle-42@2x.png"
                    />
                    <button className={styles.trash} id="cancel_button">
                    <img className={styles.trashChild} alt="" src="/images/vector-8.svg" />
                    <img className={styles.trashItem} alt="" src="/images/vector-8.svg" />
                    <img className={styles.trashInner} alt="" src="/images/rectangle-41.svg" />
                    <div className={styles.ellipseDiv} />
                    </button>
                    <div className={styles.div}>1000</div>
                    <img
                    className={styles.jumpTimeDuotoneLineIcon}
                    alt=""
                    src="/images/jump-time-duotone-line.svg"
                    />
                    <div className={styles.gazipurdhaka}>
                    <p className={styles.blankLine}>Gazipur,Dhaka</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    </div>
                    <b className={styles.benaroshiSaree}>Benaroshi Saree</b>
                    <div className={styles.component71}>
                        <button className={styles.minus} id="minus_button" />
                        <div className={styles.count}>1</div>
                        <button className={styles.plus} id="plus_button" />
                        <img
                        className={styles.component71Child}
                        alt=""
                            src="/images/group-14701.svg"
                        />
                        <img
                            className={styles.path7Copy6}
                            alt=""
                            src="/images/path-7-copy-6.svg"
                            />
                            </div>
                        </div> */}
                </div>
                <div className={styles.selectedItems1}>Selected Items</div>
                <div className={styles.checkoutFrame}>
                    <div className={styles.checkout1}>Checkout</div>
                    <a className={styles.notLoggedInContainer} id="login">
                        <span>Not logged in?</span>
                        <span className={styles.clickHereTo}> Click here to login</span>
                    </a>
                    <div className={styles.content}>
                        <div className={styles.divider}>
                            <div className={styles.divider1} />
                        </div>
                        <div className={styles.or}>OR</div>
                        <div className={styles.divider}>
                            <div className={styles.divider1} />
                        </div>
                    </div>
                </div>
                <div className={styles.fields} id="total_cost">
                    <div className={styles.totalField}>
                        <div className={styles.content1}>
                            <div className={styles.titleamount}>
                                <div className={styles.label}>Total</div>
                                <div className={styles.totalBill}>{`${totalPrice} `}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.tk}>tk</div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
