import React, { useState } from "react";
import Style from "./Navbar_seller.module.css"; // Import your CSS module
import Button from "./Button";
const Navbar = () => {
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);

  const toggleProductMenu = () => {
    setProductMenuOpen(!isProductMenuOpen);
  };

  return (
    <>
      <div className={Style.navbar}> {/* Use CSS module class name */}
        <div className={Style.upper}>
          <div className={Style.left}>
            <h4 style={{ margin: '1px' }}>Become a Seller</h4>
          </div>
          <div className={Style.right}>
          
            <Button name="Log in"/>
            <div className={Style.icons}>
                <i class="fa-regular fa-bell"></i>
                <p>Notifications</p>
            </div>
            <div className={Style.icons}>
                <i class="fa-solid fa-cart-plus"></i>
                <p>Cart</p>
            </div>

                    
          </div>
        </div>
        <div className={Style.lower}>
          <div className={Style.left}>
            <a href="/"><img src="./images/384165997_332969559130939_1111385360839973004_n.png" alt="" /></a>
          </div>
          <div className={Style.middle}>
            <nav className={Style.navbar}>
              <ul className={Style['nav-list']}>
                <li className={Style['nav-item']}>Home</li>
                <li className={Style['nav-item']} onMouseEnter={toggleProductMenu} onMouseLeave={toggleProductMenu}>
                  Product
                  {isProductMenuOpen && (
                    <ul className={Style['dropdown-menu']}>
                      <li className={Style['dropdown-item']}>View Product</li>
                      <li className={Style['dropdown-item']}>Add Product</li>
                      <li className={Style['dropdown-item']}>About Craft</li>
                    </ul>
                  )}
                </li>
                <li className={Style['nav-item']}>Notification</li>
                <li className={Style['nav-item']}>Orderlist</li>
              </ul>
            </nav>
          </div>
          <div className={Style.right}>
            <input type="text" className={Style.search} placeholder="Search..." />
            <i className="fa fa-search icon"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
