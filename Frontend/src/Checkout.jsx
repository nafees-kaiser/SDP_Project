import { useParams } from "react-router";
import styles from "./Checkout.module.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CraftForm from "./Components/CraftForm";

const Checkout = () => {
  const buyerId = sessionStorage.getItem("buyer_id");
  const { obj } = useParams()
  const { product, amount } = JSON.parse(obj);
  const [count, setCount] = useState(amount)
  const [productPrice, setPrice] = useState(String(parseFloat(product.price) * parseFloat(amount)));

  useEffect(() => {
    setPrice(String(parseFloat(product.price) * parseFloat(count)))
  }, [count])
  return (
    <>
      {buyerId ? <CraftForm /> : <Navbar />}
      <div className={styles.checkout}>
        <div className={styles.checkoutChild} />
        <div className={styles.navbar20Wrapper}>

          {/* <div className={styles.navbar20}>
          <div className={styles.becomeASellerParent}>
            <a className={styles.becomeASeller} id="become_a_seller">
              Become a Seller
            </a>
            <div className={styles.links}>
              <div className={styles.language}>
                <div className={styles.elementsnavigationlink}>
                  <div className={styles.button}>
                    <div className={styles.content}>
                      <img
                        className={styles.iconarrowRight}
                        alt=""
                        src="/images/iconarrowright3.svg"
                      />
                      <div className={styles.getStarted}>Eng</div>
                    </div>
                    <img
                      className={styles.iconarrowRight}
                      alt=""
                      src="/images/iconchevrondown1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.login}>
                <img className={styles.miuserIcon} alt="" src="/images/miuser.svg" />
                <button className={styles.muiButton}>
                  <div className={styles.button1}>Login</div>
                </button>
              </div>
              <div className={styles.cart}>
                <img className={styles.iconbag} alt="" src="/images/iconbag2.svg" />
                <button className={styles.cart1} id="Cart">
                  Cart
                </button>
              </div>
              <div className={styles.notification}>
                <img
                  className={styles.notificationChild}
                  alt=""
                  src="/images/frame-201.svg"
                />
                <button
                  className={styles.notification1}
                  id="notification_button"
                >
                  Notification
                </button>
              </div>
            </div>
          </div>
          <div className={styles.home}>
            <div className={styles.elementsnavigationlinkGroup}>
              <a className={styles.elementsnavigationlink1} id="home">
                <div className={styles.cart}>
                  <div className={styles.content}>
                    <img
                      className={styles.iconarrowRight}
                      alt=""
                      src="/images/iconarrowright1.svg"
                    />
                    <div className={styles.getStarted}>Home</div>
                  </div>
                </div>
              </a>
              <a className={styles.elementsnavigationlink1} id="product">
                <div className={styles.cart}>
                  <div className={styles.content}>
                    <img
                      className={styles.iconarrowRight}
                      alt=""
                      src="/images/iconarrowright1.svg"
                    />
                    <div className={styles.getStarted}>Product</div>
                  </div>
                </div>
              </a>
              <a className={styles.elementsnavigationlink1} id="community">
                <div className={styles.cart}>
                  <div className={styles.cart}>
                    <div className={styles.getStarted}>Community</div>
                  </div>
                </div>
              </a>
              <a
                className={styles.elementsnavigationlink1}
                id="know about crafts"
              >
                <div className={styles.cart}>
                  <div className={styles.content}>
                    <img
                      className={styles.iconarrowRight}
                      alt=""
                      src="/images/iconarrowright1.svg"
                    />
                    <div className={styles.getStarted}>Know About Crafts</div>
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.elementssearchInline}>
              <img
                className={styles.iconsearch}
                alt=""
                src="/images/iconsearch1.svg"
              />
              <input
                className={styles.elementssearchInlineChild}
                name="Search"
                type="text"
              />
            </div>
            <img
              className={styles.screenshot20230908171203}
              alt=""
              src="/images/screenshot-20230908-171203@2x.png"
            />
          </div>
        </div>*/}
        </div>
        <div className={styles.contactInfoFrame} id="contact_info">
          <div className={styles.contactInformation}>Contact Information</div>
          <div className={styles.emailAddress}>Email Address</div>
          <div className={styles.fullName}>Full Name</div>
          <input
            className={styles.inputEmail}
            name="email_input"
            placeholder="Email address"
            type="text"
          />
          <input
            className={styles.inputName}
            name="name_input"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className={styles.shippingAddressFrame} id="Shipping Address">
          <input
            className={styles.inputStreet}
            name="input_street"
            placeholder="Street"
            type="text"
          />
          <div className={styles.streetAddress}>Street Address *</div>
          <div className={styles.blockNo}>Block No. *</div>
          <input
            className={styles.inputBlock}
            name="input_block_no"
            placeholder="Block no."
            type="text"
          />
          <div className={styles.district}>District *</div>
          <input
            className={styles.inputDistrict}
            name="input_district"
            placeholder="District"
            type="text"
          />
          <div className={styles.division}>Division *</div>
          <input
            className={styles.inputDivision}
            name="input_division"
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
        <button className={styles.placeOrderButton} id="place_order_button">
          {/* <img
          className={styles.iconarrowRight4}
          alt=""
          src="/images/iconarrowright4.svg"
        /> */}
          <div className={styles.getStarted5}>Place order</div>
          {/* <img
          className={styles.iconarrowRight4}
          alt=""
          src="/images/iconarrowright4.svg"
        /> */}
        </button>
        <div className={styles.selectedItems} id="items">
          <div className={styles.product1}>
            <div className={styles.product1Child} />
            <img
              className={styles.product1Item}
              alt=""
              src="/images/rectangle-42@2x.png"
            />
            {/* <button className={styles.trash} id="cancel_button">
            <img className={styles.trashChild} alt="" src="/images/vector-8.svg" />
            <img className={styles.trashItem} alt="" src="/images/vector-8.svg" />
            <img className={styles.trashInner} alt="" src="/images/rectangle-41.svg" />
            <div className={styles.ellipseDiv} />
          </button> */}
            <div className={styles.elementsproductLoopcartqua}>
              <div className={styles.content5}>
                <button className={styles.iconminus} id="minus_button" onClick={() => {
                  if (count) {
                    // setCount(count - 1)
                    setCount(count - 1)
                  }
                  else {
                    setCount(0)
                    // setPrice(0)
                  }
                  // setPrice(String(parseFloat(product.price) * parseFloat(count)))
                }}>
                  {/* <img className={styles.vectorIcon} alt="" src="/images/vector2.svg" /> */}
                  -
                </button>
                <div className={styles.getStarted6}>{count}</div>
                <button className={styles.iconadd} id="plus_button" onClick={() => {
                  setCount(count + 1);
                  // setPrice(String(parseFloat(product.price) * parseFloat(count)))
                }}>
                  {/* <img className={styles.unionIcon} alt="" src="/images/union.svg" /> */}
                  +
                </button>
              </div>
            </div>
            <div className={styles.div}>{productPrice}</div>
            <div className={styles.benaroshiSaree}>{product.productName}</div>
            {/* <img
            className={styles.jumpTimeDuotoneLineIcon}
            alt=""
            src="/images/jump-time-duotone-line.svg"
          /> */}

          </div>
          <div className={styles.product2}>
            {/* <div className={styles.product1Child} /> */}
            {/* <img
            className={styles.tablercurrencyTakaIcon}
            alt=""
            src="/tablercurrencytaka.svg"
          /> */}
            {/* <img
            className={styles.product1Item}
            alt=""
            src="/rectangle-42@2x.png"
          /> */}
            {/* <button className={styles.trash} id="cancel_button">
            <img className={styles.trashChild} alt="" src="/vector-8.svg" />
            <img className={styles.trashItem} alt="" src="/vector-8.svg" />
            <img className={styles.trashInner} alt="" src="/rectangle-41.svg" />
            <div className={styles.ellipseDiv} />
          </button> */}
            {/* <div className={styles.elementsproductLoopcartqua}>
            <div className={styles.content5}>
              <button className={styles.iconminus} id="minus_button">
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
              </button>
              <div className={styles.getStarted6}>1</div>
              <button className={styles.iconadd1} id="plus_button">
                <img className={styles.unionIcon} alt="" src="/union.svg" />
              </button>
            </div>
          </div> */}
            {/* <div className={styles.div}>1000</div>
          <div className={styles.benaroshiSaree}>Benaroshi Saree</div> */}
            {/* <img
            className={styles.jumpTimeDuotoneLineIcon}
            alt=""
            src="/jump-time-duotone-line.svg"
          /> */}
            {/* <div className={styles.gazipurdhaka}>
            <p className={styles.blankLine}>Gazipur,Dhaka</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div> */}
          </div>
          {/* <div className={styles.product3}>
          <div className={styles.product1Child} />
          <img
            className={styles.tablercurrencyTakaIcon}
            alt=""
            src="/tablercurrencytaka.svg"
          />
          <img
            className={styles.product1Item}
            alt=""
            src="/rectangle-42@2x.png"
          />
          <button className={styles.trash} id="cancel_button">
            <img className={styles.trashChild} alt="" src="/vector-8.svg" />
            <img className={styles.trashItem} alt="" src="/vector-8.svg" />
            <img className={styles.trashInner} alt="" src="/rectangle-41.svg" />
            <div className={styles.ellipseDiv} />
          </button>
          <div className={styles.elementsproductLoopcartqua}>
            <div className={styles.content5}>
              <button className={styles.iconminus} id="minus_button">
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
              </button>
              <div className={styles.getStarted6}>1</div>
              <button className={styles.iconadd1} id="plus_button">
                <img className={styles.unionIcon} alt="" src="/union.svg" />
              </button>
            </div>
          </div>
          <div className={styles.div}>1000</div>
          <div className={styles.benaroshiSaree}>Benaroshi Saree</div>
          <img
            className={styles.jumpTimeDuotoneLineIcon}
            alt=""
            src="/jump-time-duotone-line.svg"
          />
          <div className={styles.gazipurdhaka2}>
            <p className={styles.blankLine}>Gazipur,Dhaka</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
        </div> */}
        </div>
        <div className={styles.fields} id="total_cost">
          <div className={styles.shippingCostField}>
            <div className={styles.content8}>
              <div className={styles.titleamount}>
                <div className={styles.title}>
                  <img
                    className={styles.iconcoupon}
                    alt=""
                    src="/images/iconcoupon1.svg"
                  />
                  <div className={styles.label}>Shipping</div>
                </div>
                <div className={styles.shippingCost}>60 tk</div>
              </div>
            </div>
          </div>
          <div className={styles.shippingCostField}>
            <div className={styles.content8}>
              <div className={styles.titleamount}>
                <div className={styles.title}>
                  <img
                    className={styles.iconcoupon}
                    alt=""
                    src="/images/iconcoupon1.svg"
                  />
                  <div className={styles.label}>Subtotal</div>
                </div>
                <div className={styles.shippingCost}>{`${productPrice} Tk`}</div>
              </div>
            </div>
          </div>
          <div className={styles.totalField}>
            <div className={styles.content8}>
              <div className={styles.titleamount}>
                <div className={styles.label2}>Total</div>
                <div className={styles.totalBill}>{`${String(parseFloat(productPrice) + 60)} Tk`}</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.footer}>
          <div className={styles.footer1}>
            <div className={styles.footerChild} />
            <div className={styles.company}>Company</div>
            <div className={styles.information}>Information</div>
            <div className={styles.shop}>Shop</div>
            <div className={styles.footerItem} />
            <div className={styles.copyright2023}>@ copyright 2023</div>
            <div className={styles.preservingTraditionEmpoweriContainer}>
              <p className={styles.preservingTraditionEmpoweri}>
                {" "}
                Preserving Tradition, Empowering
              </p>
              <p className={styles.blankLine}>
                <span className={styles.artisansAndCelebrating}>
                  {" "}
                  Artisans, and Celebrating Craftsmanship
                </span>
                .
              </p>
            </div>
            <img
              className={styles.mditwitterIcon}
              alt=""
              src="/mditwitter11.svg"
            />
            <img
              className={styles.mdiinstagramIcon}
              alt=""
              src="/mdiinstagram11.svg"
            />
            <img
              className={styles.rifacebookFillIcon}
              alt=""
              src="/rifacebookfill11.svg"
            />
            <div className={styles.privacyPolicyTermsContainer}>
              <p className={styles.blankLine}>Privacy policy</p>
              <p className={styles.blankLine}>{`Terms & conditions`}</p>
              <p className={styles.blankLine}>Contract Us</p>
            </div>
            <div className={styles.orderPolicyReturnsContainer}>
              <p className={styles.blankLine}>Order policy</p>
              <p className={styles.blankLine}>{`Returns & Refunds`}</p>
              <p className={styles.blankLine}>Cookies Policy</p>
              <p className={styles.blankLine}>Frequently asked</p>
            </div>
            <div className={styles.myAccountLoginContainer}>
              <p className={styles.blankLine}>My account</p>
              <p className={styles.blankLine}>Login</p>
              <p className={styles.blankLine}>Wishlist</p>
              <p className={styles.blankLine}>Cart</p>
            </div>
            <img
              className={styles.screenshot202309081712031}
              alt=""
              src="/screenshot-20230908-171203-111@2x.png"
            />
          </div>
        </div> */}
        <div className={styles.selectedItems1}>Selected Items</div>
        <div className={styles.checkoutFrame}>
          <div className={styles.checkout1}>Checkout</div>
          <a className={styles.notLoggedInContainer} id="login">
            <span>Not logged in?</span>
            <span className={styles.clickHereTo}> Click here to login</span>
          </a>
          <div className={styles.content11}>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
            <div className={styles.label}>OR</div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Checkout;
