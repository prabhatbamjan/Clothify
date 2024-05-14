export default function Ratings({ rating }) {
    return (
        <>
            <div className="card-rating">
                {new Array(Math.floor(rating)).fill(0).map((_, index) => (
                    <i className="fa-solid fa-star" key={index}></i>
                ))}
                {
                    Number.isInteger(rating) ? "" : <i className="fa-solid fa-star-half-stroke"></i>
                }
            </div>
        </>
    )
}