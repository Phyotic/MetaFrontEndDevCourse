import "./HomePage.css";
import section1Image from "../../images/Mario and Adrian A.jpg";
import greekSalad from "../../images/greek salad.jpg";
import bruchetta from "../../images/bruchetta.svg";
import lemonDessert from "../../images/lemon dessert.jpg";
import restaurantFood from "../../images/restauranfood.jpg";
import DishCard from "../DishCard/DishCard";
import Rating from "../Rating/Rating";
import manOne from "../../images/man-1.jpg";
import manTwo from "../../images/man-2.jpg";
import womanOne from "../../images/woman-1.jpg";
import womanTwo from "../../images/woman-2.jpg";

function HomePage() {
    const specialsInfo = [
        {
            name: "Greek Salad",
            price: "12.99",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta modi ab harum! Laudantium, expedita sint sit nihil veritatis dignissimos repudiandae nulla, ipsam quos obcaecati accusamus, consequatur totam. Perspiciatis, repudiandae nihil.",
            image: greekSalad,
        },
        {
            name: "Bruchetta",
            price: "12.99",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta modi ab harum! Laudantium, expedita sint sit nihil veritatis dignissimos repudiandae nulla, ipsam quos obcaecati accusamus, consequatur totam. Perspiciatis, repudiandae nihil.",
            image: bruchetta,
        },
        {
            name: "Lemon Dessert",
            price: "12.99",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta modi ab harum! Laudantium, expedita sint sit nihil veritatis dignissimos repudiandae nulla, ipsam quos obcaecati accusamus, consequatur totam. Perspiciatis, repudiandae nihil.",
            image: lemonDessert,
        },
    ];

    const ratingsInfo = [
        {
            rating: 5,
            userPortrait: manOne,
            altText: "Alex Amon",
            name: "Alex",
            reviewText:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas cupiditate eaque minus laboriosam perferendis nulla odit accusamus vel officia accusantium, enim adipisci, voluptatibus itaque repudiandae quos amet commodi animi?",
        },
        {
            rating: 4,
            userPortrait: manTwo,
            altText: "Bruce Barl",
            name: "Bruce",
            reviewText:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas cupiditate eaque minus laboriosam perferendis nulla odit accusamus vel officia accusantium, enim adipisci, voluptatibus itaque repudiandae quos amet commodi animi?",
        },
        {
            rating: 3,
            userPortrait: womanOne,
            altText: "Candice Cline",
            name: "Candice",
            reviewText:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas cupiditate eaque minus laboriosam perferendis nulla odit accusamus vel officia accusantium, enim adipisci, voluptatibus itaque repudiandae quos amet commodi animi?",
        },
        {
            rating: 5,
            userPortrait: womanTwo,
            altText: "Diana Delume",
            name: "Diana Delume",
            reviewText:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas cupiditate eaque minus laboriosam perferendis nulla odit accusamus vel officia accusantium, enim adipisci, voluptatibus itaque repudiandae quos amet commodi animi?",
        },
    ];

    return (
        <>
            <section id="reserve-section">
                <section id="reserve-image-background">
                    <section className="top-half">
                        <h1 className="markazi-text-medium">Little Lemon</h1>
                        <h2 className="markazi-text-medium">Chicago</h2>
                    </section>

                    <section className="bottom-half">
                        <p className="karla-regular">
                            Little Lemon is a charming neighborhood bistro that serves
                            simple, good, and classic cocktails in a lively but casual
                            environment. The restaurant features a locally-sourced menu
                            with daily specials.
                        </p>
                        <button className="standard-button" aria-label="On Click">
                            Reserve a Table
                        </button>
                    </section>
                </section>

                <div className="img-container">
                    <img src={section1Image} alt="placeholder text"></img>
                </div>
            </section>

            <section id="specials-section">
                <section id="specials-header">
                    <h1 className="markazi-text-medium">Specials</h1>
                    <button className="standard-button" aria-label="On Click">
                        Online Menu
                    </button>
                </section>

                <section className="dish-cards-container">
                    {specialsInfo.map((dish) => {
                        return (
                            <DishCard
                                key={dish.name}
                                name={dish.name}
                                price={dish.price}
                                info={dish.info}
                                imageUrl={dish.image}
                            ></DishCard>
                        );
                    })}
                </section>
            </section>

            <section id="testimonials-section">
                <h1 className="markazi-text-medium">Testimonials</h1>

                <section className="ratings-container">
                    {ratingsInfo.map((review) => {
                        return (
                            <Rating
                                key={review.name}
                                rating={review.rating}
                                userPortrait={review.userPortrait}
                                altText={review.altText}
                                name={review.name}
                                reviewText={review.reviewText}
                            ></Rating>
                        );
                    })}
                </section>
            </section>

            <section id="about-us-section">
                <section id="restaurant-info">
                    <h1 className="markazi-text-medium">Little Lemon</h1>
                    <h2 className="markazi-text-medium">Chicago</h2>
                    <p className="karla-regular">
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
        </>
    );
}

export default HomePage;
