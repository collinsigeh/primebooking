import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgSloXOvTrMFvL-VTkodOyzL8VrGp9kj7zypVvnQs6g&s" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        
        <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpeJnfgQej_V5Q7h3zH3CRZx9GG9uzTKqmU5401euZbQ&s" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>512 properties</h2>
            </div>
        </div>
        
        <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMNq6fVdGN0NQlRgCxN83MCbo53jW4YDo45OpMjjMNQ&s" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>465 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured