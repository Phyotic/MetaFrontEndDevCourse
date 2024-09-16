import "./Main.css";
import section1Image from "../../images/Mario and Adrian A.jpg";
import greekSalad from "../../images/greek salad.jpg";
import bruchetta from "../../images/bruchetta.svg";
import lemonDessert from "../../images/lemon dessert.jpg";
import deliveryBike from "../../images/motorbike-delivery-icon.svg";
import userPortrait from "../../images/restaurant chef B.jpg";
import restaurantFood from "../../images/restauranfood.jpg";
import chefs from "../../images/Mario and Adrian b.jpg";

function Main() {
    return (
        <main>
            <section id="reserve-section">
                <section id="reserve-image-background">
                    <section className="top-half">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </section>

                    <section className="bottom-half">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Adipisci veniam atque facilis ducimus asperiores sed dolorum,
                            deleniti iure, nulla quo, consectetur illo ullam aliquid
                            perferendis totam quaerat alias eum libero!
                        </p>
                        <button>Reserve a Table</button>
                    </section>
                </section>

                <div className="img-container">
                    <img src={section1Image} alt="placeholder text"></img>
                </div>
            </section>

            <section id="specials-section">
                <section id="specials-header">
                    <h1>Specials</h1>
                    <button>Online Menu</button>
                </section>

                <section className="dish-cards-container">
                    <section className="dish-card">
                        <img src={greekSalad} width="100%" alt="Greek salad"></img>

                        <section className="dish-info">
                            <section className="dish-name-price">
                                <p>Greek Salad</p>
                                <p>
                                    <span className="highlight-orange">$12.99</span>
                                </p>
                            </section>

                            <p>
                                asdfasdf as df asdf asd a sdf asdfasdfa as dfas dfa sd
                                fasdfasdsfas dfsd f assd f asd f asd fas df as dfa sdf asd
                                f asdfasdf asdfasdfassdf a f asd fasdf
                            </p>

                            <section className="card-deliver">
                                <button>Order a delivery</button>
                                <img
                                    className="delivery-bike"
                                    alt="delivery bike icon"
                                    src={deliveryBike}
                                ></img>
                            </section>
                        </section>
                    </section>

                    <section className="dish-card">
                        <img src={bruchetta} width="100%" alt="Bruchetta"></img>

                        <section className="dish-info">
                            <section className="dish-name-price">
                                <p>Bruchetta</p>
                                <p>
                                    <span className="highlight-orange">$12.99</span>
                                </p>
                            </section>

                            <p>
                                asdfasdf as df asdf asd a sdf asdfasdfa as dfas dfa sd
                                fasdfasdsfas dfsd f assd f asd f asd fas df as dfa sdf asd
                                f asdfasdf asdfasdfassdf a f asd fasdf
                            </p>

                            <section className="card-deliver">
                                <button>Order a delivery</button>
                                <img
                                    className="delivery-bike"
                                    alt="delivery bike icon"
                                    src={deliveryBike}
                                ></img>
                            </section>
                        </section>
                    </section>

                    <section className="dish-card">
                        <img src={lemonDessert} width="100%" alt="Lemon Dessert"></img>

                        <section className="dish-info">
                            <section className="dish-name-price">
                                <p>Lemon Dessert</p>
                                <p>
                                    <span className="highlight-orange">$12.99</span>
                                </p>
                            </section>

                            <p>
                                asdfasdf as df asdf asd a sdf asdfasdfa as dfas dfa sd
                                fasdfasdsfas dfsd f assd f asd f asd fas df as dfa sdf asd
                                f asdfasdf asdfasdfassdf a f asd fasdf
                            </p>

                            <section className="card-deliver">
                                <button>Order a delivery</button>
                                <img
                                    className="delivery-bike"
                                    alt="delivery bike icon"
                                    src={deliveryBike}
                                ></img>
                            </section>
                        </section>
                    </section>
                </section>
            </section>

            <section id="testimonials-section">
                <h1>Testimonials</h1>

                <section className="ratings-container">
                    <section className="rating-card">
                        <h1>Rating</h1>
                        <section className="rating-profile-and-name">
                            <div className="rating-profile-image-container">
                                <img
                                    className="rating-profile-image"
                                    src={userPortrait}
                                    alt="user-image"
                                ></img>
                            </div>
                            <p>Name</p>
                        </section>
                        <p>Review text</p>
                    </section>

                    <section className="rating-card">
                        <h1>Rating</h1>
                        <section className="rating-profile-and-name">
                            <div className="rating-profile-image-container">
                                <img
                                    className="rating-profile-image"
                                    src={userPortrait}
                                    alt="user-image"
                                ></img>
                            </div>
                            <p>Name</p>
                        </section>
                        <p>Review text</p>
                    </section>

                    <section className="rating-card">
                        <h1>Rating</h1>
                        <section className="rating-profile-and-name">
                            <div className="rating-profile-image-container">
                                <img
                                    className="rating-profile-image"
                                    src={userPortrait}
                                    alt="user-image"
                                ></img>
                            </div>
                            <p>Name</p>
                        </section>
                        <p>Review text</p>
                    </section>

                    <section className="rating-card">
                        <h1>Rating</h1>
                        <section className="rating-profile-and-name">
                            <div className="rating-profile-image-container">
                                <img
                                    className="rating-profile-image"
                                    src={userPortrait}
                                    alt="user-image"
                                ></img>
                            </div>
                            <p>Name</p>
                        </section>
                        <p>Review text</p>
                    </section>
                </section>
            </section>

            <section id="about-us-section">
                <section id="restaurant-info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
                        at reprehenderit optio maxime? Qui veritatis labore voluptate eum
                        maxime fuga corrupti, nesciunt animi unde ipsam sequi delectus
                        iure. Delectus, ad. Commodi odit saepe, omnis, qui veniam placeat
                        quis exercitationem, error adipisci illo quia dolor ipsum quisquam
                        eum accusantium facilis doloremque facere! Harum totam quos
                        suscipit placeat nemo, exercitationem repudiandae perferendis.
                    </p>
                </section>

                <section id="about-us-images-container">
                    <div className="about-us-image-containers">
                        <img
                            className="about-us-image"
                            src={restaurantFood}
                            alt="restaurant food"
                        ></img>
                    </div>

                    <div className="about-us-image-containers">
                        <img
                            className="about-us-image"
                            src={restaurantFood}
                            alt="chefs"
                        ></img>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Main;
