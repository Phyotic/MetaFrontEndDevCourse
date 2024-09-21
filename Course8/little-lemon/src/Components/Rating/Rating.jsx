import "./Rating.css";

function Ratings({ rating, userPortrait, altText, name, reviewText }) {
    return (
        <section className="rating-card">
            <h1>{"★".repeat(rating)}</h1>
            <section className="rating-profile-and-name">
                <div className="rating-profile-image-container">
                    <img
                        className="rating-profile-image"
                        src={userPortrait}
                        alt={altText}
                    ></img>
                </div>
                <p>{name}</p>
            </section>
            <p>{reviewText}</p>
        </section>
    );
}

export default Ratings;
