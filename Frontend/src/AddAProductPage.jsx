import styles from "./AddAProductPage.module.css";

const AddAProductPage = () => {
  return (
    <div className={styles.addAProductPage}>
      <div className={styles.linkToAddProductDescriptio}>
        <div className={styles.text}>
          Want to add more information about your handicraft?
        </div>
      </div>
      <button className={styles.save}>
        <div className={styles.button}>Save</div>
      </button>
      <button className={styles.preview}>
        <div className={styles.button}>Preview</div>
      </button>
      <div className={styles.pricing}>
        <div className={styles.price}>
          <div className={styles.formelementstitle}>Label</div>
          <input
            className={styles.input}
            name="price"
            id="price"
            placeholder="e.g. 100"
            type="text"
          />
        </div>
        <div className={styles.pricing1}>
          <span>Pricing</span>
          <span className={styles.span}>*</span>
        </div>
        <div className={styles.taka}>
          <div className={styles.taka1}>Taka</div>
        </div>
      </div>
      <div className={styles.image}>
        <div className={styles.youNeedToContainer}>
          <span>*</span>
          <span className={styles.youNeedTo}>
            You need to at least add four images. Make sure the Product shows
            all the details.
          </span>
        </div>
        <div className={styles.addMoreButton}>
          <div className={styles.addMoreButtonChild} />
          <img className={styles.iconadd} alt="" src="./images/iconadd1.svg" />
        </div>
        <div className={styles.imagePlaceholder1}>
          <img
            className={styles.pasteImageIcon}
            alt=""
            src="./images/paste-image1@2x.png"
          />
        </div>
        <div className={styles.addMoreButton1}>
          <div className={styles.addMoreButtonItem} />
          <img className={styles.iconadd1} alt="" src="./images/iconadd2.svg" />
        </div>
        <div className={styles.imagePlaceholder2}>
          <img
            className={styles.pasteImageIcon}
            alt=""
            src="./images/paste-image2@2x.png"
          />
        </div>
        <div className={styles.addMoreButton2}>
          <div className={styles.addMoreButtonItem} />
          <img className={styles.iconadd1} alt="" src="./images/iconadd2.svg" />
        </div>
        <div className={styles.imagePlaceholder3}>
          <img
            className={styles.pasteImageIcon}
            alt=""
            src="./images/paste-image3@2x.png"
          />
        </div>
        <div className={styles.addMoreButton3}>
          <div className={styles.addMoreButtonItem} />
          <img className={styles.iconadd1} alt="" src="./images/iconadd2.svg" />
        </div>
        <div className={styles.imagePlaceholder4}>
          <img
            className={styles.pasteImageIcon}
            alt=""
            src="./images/paste-image4@2x.png"
          />
        </div>
        <div className={styles.addMoreButton4}>
          <div className={styles.addMoreButtonItem} />
          <img className={styles.iconadd1} alt="" src="./images/iconadd2.svg" />
        </div>
        <div className={styles.image1}>
          <span>Image</span>
          <span className={styles.span}>*</span>
        </div>
        <div className={styles.text1}>
          <div className={styles.text}>Front</div>
        </div>
        <div className={styles.text3}>
          <div className={styles.text}>Left</div>
        </div>
        <div className={styles.text5}>
          <div className={styles.text}>Back</div>
        </div>
        <div className={styles.text7}>
          <div className={styles.text}>Right</div>
        </div>
        <div className={styles.moreImage}>More image</div>
      </div>
      <div className={styles.navbar20}>
        <div className={styles.linksWrapper}>
          <div className={styles.links}>
            <div className={styles.language}>
              <div className={styles.elementsnavigationlink}>
                <div className={styles.button2}>
                  <div className={styles.content}>
                    <img
                      className={styles.iconarrowRight}
                      alt=""
                      src="./images/iconarrowright.svg"
                    />
                    <div className={styles.getStarted}>Eng</div>
                  </div>
                  <img
                    className={styles.iconchevronDown}
                    alt=""
                    src="./images/iconchevrondown2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.login}>
              <img className={styles.miuserIcon} alt="" src="./images/miuser.svg" />
              <div className={styles.muiButton}>
                <div className={styles.productList}>Button</div>
              </div>
            </div>
            <div className={styles.notification}>
              <img
                className={styles.notificationChild}
                alt=""
                src="./images/frame-20.svg"
              />
              <div className={styles.notification1}>Notification</div>
            </div>
          </div>
        </div>
        <div className={styles.home}>
          <div className={styles.elementsnavigationlinkGroup}>
            <div className={styles.elementsnavigationlink1}>
              <button className={styles.button4} id="home">
                <div className={styles.content}>
                  <img
                    className={styles.iconarrowRight}
                    alt=""
                    src="./images/iconarrowright.svg"
                  />
                  <div className={styles.getStarted1}>Home</div>
                </div>
              </button>
            </div>
            <div className={styles.elementsnavigationlinkParent}>
              <button className={styles.button4}>
                <div className={styles.elementsnavigationlink1}>
                  <div className={styles.content}>
                    <img
                      className={styles.iconarrowRight}
                      alt=""
                      src="./images/iconarrowright.svg"
                    />
                    <div className={styles.getStarted1}>Product</div>
                  </div>
                </div>
              </button>
              <img
                className={styles.iconchevronDown1}
                alt=""
                src="./images/iconchevrondown3.svg"
              />
            </div>
            <button className={styles.button4}>
              <div className={styles.elementsnavigationlink1}>
                <div className={styles.elementsnavigationlink1}>
                  <div className={styles.getStarted1}>Community</div>
                </div>
              </div>
            </button>
            <button className={styles.button4}>
              <div className={styles.elementsnavigationlink1}>
                <div className={styles.content}>
                  <img
                    className={styles.iconarrowRight}
                    alt=""
                    src="./images/iconarrowright.svg"
                  />
                  <div className={styles.getStarted1}>Order list</div>
                </div>
              </div>
            </button>
          </div>
          <img
            className={styles.elementssearchInlineIcon}
            alt=""
            src="/elementssearch-inline.svg"
          />
          <img
            className={styles.screenshot20230908171203}
            alt=""
            src="/screenshot-20230908-171203@2x.png"
          />
          <div className={styles.productListParent}>
            <div className={styles.productList}>Product list</div>
            <div className={styles.productList}>Add product</div>
            <div className={styles.productList}>Add about craft</div>
          </div>
        </div>
      </div>
      <div className={styles.headerBanner}>
        <img
          className={styles.handicraft768x4321Icon}
          alt=""
          src="./images/639291handicraft768x432-1@2x.png"
        />
        <div className={styles.header}>
          <b className={styles.productList}>Add a product</b>
          <div className={styles.addYourCrafts}>
            Add your crafts to sell with us
          </div>
        </div>
      </div>
      <div className={styles.stContainer}>
        <div className={styles.description}>
          <div className={styles.description1}>
            <div className={styles.productName}>
              <div className={styles.formelementstitle1}>
                <span>Product name</span>
                <span className={styles.span}>*</span>
              </div>
              <input
                className={styles.input}
                name="product_name"
                id="p_name"
                placeholder="e.g. Dhakaia Benarashi Sharee"
                type="text"
              />
            </div>
            <div className={styles.productName}>
              <div className={styles.formelementstitle1}>
                <span>Short description</span>
                <span className={styles.span}>*</span>
              </div>
              <input
                className={styles.input2}
                name="description"
                id="description"
                placeholder="Aa"
                type="text"
              />
            </div>
            <div className={styles.categories}>
              <div className={styles.categories1}>
                <span>Categories</span>
                <span className={styles.span}>*</span>
              </div>
              <select
                className={styles.dropdownInteractionMain}
                required={true}
              />
            </div>
          </div>
          <b className={styles.description2}>Description</b>
        </div>
        <div className={styles.characteristics}>
          <b className={styles.description2}>
            <span>Characteristics</span>
            <span className={styles.span}>*</span>
          </b>
          <div className={styles.color}>
            <div className={styles.elementsfilterSectiontitle}>
              <div className={styles.categories2}>Color</div>
              <img
                className={styles.iconchevronUp}
                alt=""
                src="./images/iconchevronup3.svg"
              />
            </div>
            <div className={styles.elementsswatchescolor}>
              <div className={styles.size}>Color:</div>
              <div className={styles.swatchclear}>
                <div className={styles.elementsswatchesgroupcolor}>
                  <div className={styles.items}>
                    <img
                      className={styles.elementsswatchessinglecolorIcon}
                      alt=""
                      src="./images/stylecircle-stateactive-sizelarge-hoverno.svg"
                    />
                    <img
                      className={styles.elementsswatchessinglecolorIcon1}
                      alt=""
                      src="./images/elementsswatchessinglecolor.svg"
                    />
                    <img
                      className={styles.elementsswatchessinglecolorIcon1}
                      alt=""
                      src="./images/elementsswatchessinglecolor1.svg"
                    />
                    <img
                      className={styles.elementsswatchessinglecolorIcon1}
                      alt=""
                      src="./images/elementsswatchessinglecolor2.svg"
                    />
                  </div>
                </div>
                <div className={styles.elementsswatchesclearButton}>
                  <div className={styles.button2}>
                    <img
                      className={styles.iconclose}
                      alt=""
                      src="./images/iconclose.svg"
                    />
                    <div className={styles.getStarted5}>Clear</div>
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.colorChild} alt="" src="./images/frame-961.svg" />
          </div>
          <div className={styles.color2}>
            <div className={styles.elementsfilterSectiontitle1}>
              <div className={styles.categories2}>Size</div>
              <img
                className={styles.iconchevronUp}
                alt=""
                src="./images/iconchevronup3.svg"
              />
            </div>
            <div className={styles.elementsswatchesbutton}>
              <div className={styles.size}>Size</div>
              <div className={styles.elementsswatchesgroupbuttonParent}>
                <div className={styles.elementsswatchesgroupbutton}>
                  <div className={styles.elementsswatchessinglebutto}>
                    <div className={styles.hello}>S</div>
                  </div>
                  <div className={styles.elementsswatchessinglebutto1}>
                    <div className={styles.hello}>M</div>
                  </div>
                  <div className={styles.elementsswatchessinglebutto1}>
                    <div className={styles.hello}>L</div>
                  </div>
                  <div className={styles.elementsswatchessinglebutto1}>
                    <div className={styles.hello}>XL</div>
                  </div>
                  <div className={styles.elementsswatchessinglebutto4}>
                    <div className={styles.hello}>2XL</div>
                  </div>
                </div>
                <div className={styles.elementsswatchesclearButton1}>
                  <div className={styles.button2}>
                    <img
                      className={styles.iconclose}
                      alt=""
                      src="./images/iconclose.svg"
                    />
                    <div className={styles.getStarted5}>Clear</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.elementsswatchesbutton}>
              <div className={styles.size}>Size</div>
              <div className={styles.elementsswatchesgroupbuttonParent}>
                <div className={styles.elementsswatchesgroupbutton}>
                  <div className={styles.elementsswatchessinglebutto}>
                    <div className={styles.hello}>One size</div>
                  </div>
                  <div className={styles.elementsswatchessinglebutto1}>
                    <div className={styles.hello}>Custom</div>
                  </div>
                  <div className={styles.elementsswatchessinglebutto4}>
                    <div className={styles.hello}>L</div>
                  </div>
                  <div className={styles.elementsswatchessinglebutto4}>
                    <div className={styles.hello}>XL</div>
                  </div>
                  <div className={styles.elementsswatchessinglebutto4}>
                    <div className={styles.hello}>2XL</div>
                  </div>
                </div>
                <div className={styles.elementsswatchesclearButton1}>
                  <div className={styles.button2}>
                    <img
                      className={styles.iconclose}
                      alt=""
                      src="./images/iconclose.svg"
                    />
                    <div className={styles.getStarted5}>Clear</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.location}>
          <div className={styles.location1}>
            <div className={styles.productName}>
              <div className={styles.formelementstitle1}>
                <span>Division</span>
                <span className={styles.span}>*</span>
              </div>
              <input
                className={styles.input}
                name="division"
                id="division"
                placeholder="e.g. Dhaka"
                type="text"
              />
            </div>
            <div className={styles.productName}>
              <div className={styles.formelementstitle1}>
                <span>District</span>
                <span className={styles.span}>*</span>
              </div>
              <input
                className={styles.input}
                name="district"
                id="district"
                placeholder="e.g. Faridpur"
                type="text"
              />
            </div>
          </div>
          <b className={styles.description2}>Location</b>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.company}>Company</div>
        <div className={styles.information}>Information</div>
        <div className={styles.shop}>Shop</div>
        <div className={styles.footerItem} />
        <div className={styles.copyright2023}>@ copyright 2023</div>
        <div className={styles.preservingTraditionEmpoweriContainer}>
          <p className={styles.preservingTraditionEmpoweri}>
            Preserving Tradition, Empowering
          </p>
          <p className={styles.artisansAndCelebratingCraf}>
            <span className={styles.artisansAndCelebrating}>
              Artisans, and Celebrating Craftsmanship
            </span>
            .
          </p>
        </div>
        <img className={styles.mditwitterIcon} alt="" src="./images/mditwitter1.svg" />
        <img
          className={styles.mdiinstagramIcon}
          alt=""
          src="./images/mdiinstagram.svg"
        />
        <img
          className={styles.rifacebookFillIcon}
          alt=""
          src="./images/rifacebookfill.svg"
        />
        <div className={styles.privacyPolicyTermsContainer}>
          <p className={styles.artisansAndCelebratingCraf}>Privacy policy</p>
          <p
            className={styles.artisansAndCelebratingCraf}
          >{`Terms & conditions`}</p>
          <p className={styles.artisansAndCelebratingCraf}>Contract Us</p>
        </div>
        <div className={styles.orderPolicyReturnsContainer}>
          <p className={styles.artisansAndCelebratingCraf}>Order policy</p>
          <p
            className={styles.artisansAndCelebratingCraf}
          >{`Returns & Refunds`}</p>
          <p className={styles.artisansAndCelebratingCraf}>Cookies Policy</p>
          <p className={styles.artisansAndCelebratingCraf}>Frequently asked</p>
        </div>
        <div className={styles.myAccountLoginContainer}>
          <p className={styles.artisansAndCelebratingCraf}>My account</p>
          <p className={styles.artisansAndCelebratingCraf}>Login</p>
          <p className={styles.artisansAndCelebratingCraf}>Wishlist</p>
          <p className={styles.artisansAndCelebratingCraf}>Cart</p>
        </div>
        <img
          className={styles.screenshot202309081712031}
          alt=""
          src="./images/screenshot-20230908-171203-11@2x.png"
        />
      </div>
    </div>
  );
};

export default AddAProductPage;
