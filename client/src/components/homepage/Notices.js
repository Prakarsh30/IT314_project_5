import "./Notices_style.css"

function Notices() {
  return (
    <div className="news-card">
        <div className="news-header">
          <h2>Latest News</h2>
        </div>
        <div className="news-body">
          <ul className="news-list">
            <li><a href="#">Headline 1</a></li>
            <li><a href="#">Headline 2</a></li>
            <li><a href="#">Headline 3</a></li>
            <li><a href="#">Headline 4</a></li>
            <li><a href="#">Headline 5</a></li>
          </ul>
        </div>
      </div>
  );
}

export default Notices;