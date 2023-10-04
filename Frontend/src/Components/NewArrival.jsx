import styles from "./NewArrival.module.css";

const NewArrival = () => {
  return (
    <div className={styles.newArrival}>
      <div className={styles.carouselTitle}>
        <b className={styles.newArrivalsIn}>
          New Arrivals in Creative Craftsmanship
        </b>
      </div>
      <div className={styles.carouselbutton}>
        <div className={styles.cards}>
          <div className={styles.elementscard}>
            <button className={styles.image}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.nomadsHandFan1507545247338Icon}
                  alt=""
                  src="./images/nomadshandfan15075452473382748-1@2x.png"
                />
              </div>
            </button>
            <div className={styles.content}>
              <div className={styles.content}>
                <div className={styles.textprice}>
                  <div className={styles.haatpakha}>{`HaatPakha `}</div>
                  <div className={styles.price}>
                    <div className={styles.div}>৳ 200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.elementscard}>
            <button className={styles.image}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.nomadsHandFan1507545247338Icon}
                  alt=""
                  src="./images/banggerchataredcolournakshinatebook1-1@2x.png"
                />
              </div>
            </button>
            <div className={styles.content}>
              <div className={styles.content}>
                <div className={styles.textprice}>
                  <div className={styles.haatpakha}>Handcrafted Notebook</div>
                  <div className={styles.price}>
                    <div className={styles.div}>৳ 450</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.elementscard}>
            <button className={styles.image}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.nomadsHandFan1507545247338Icon}
                  alt=""
                  src="./images/49-1@2x.png"
                />
              </div>
            </button>
            <div className={styles.content}>
              <div className={styles.content}>
                <div className={styles.textprice}>
                  <div className={styles.haatpakha}>Jute Flower Hanger</div>
                  <div className={styles.price}>
                    <div className={styles.div}>৳ 350</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.elementscard}>
            <button className={styles.image}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.nomadsHandFan1507545247338Icon}
                  alt=""
                  src="./images/0ea79588b43865c7d65da868e8d4af7f-1@2x.png"
                />
              </div>
            </button>
            <div className={styles.content}>
              <div className={styles.content7}>
                <div className={styles.textprice}>
                  <img
                    className={styles.ratingratingGroupIcon}
                    alt=""
                    src="./images/ratingrating-group.svg"
                  />
                  <div className={styles.haatpakha}>Crochet Table Mat</div>
                  <div className={styles.price3}>
                    <div className={styles.div}>৳ 700</div>
                    <div className={styles.div4}>$165.00</div>
                  </div>
                </div>
                <div className={styles.elementsswatchesgroupcolor}>
                  <div className={styles.items}>
                    <img
                      className={styles.elementsswatchessinglecolorIcon}
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
                    <img
                      className={styles.elementsswatchessinglecolorIcon1}
                      alt=""
                      src="./images/elementsswatchessinglecolor3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
            <button className={styles.button}>
              <img
                className={styles.iconarrowRight}
                alt=""
                src="./images/iconarrowright5.svg"
              />
            </button>
            <button className={styles.button1}>
              <img
                className={styles.iconarrowRight}
                alt=""
                src="./images/iconarrowleft.svg"
              />
            </button>
          </div>
    </div>
  );
};

export default NewArrival;
