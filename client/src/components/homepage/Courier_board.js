import "./Courier_board_style.css"

function CourierBoard() {
  return (
    <div className="courier-card">
        <div className="courier-header">
          <h2>Latest courier</h2>
        </div>
        <div className="courier-body">
          <ul className="courier-list">
            <li><a href="#">Headline 1</a></li>
            <li><a href="#">Headline 2</a></li>
            <li><a href="#">Headline 3</a></li>
            <li><a href="#">Headline 4</a></li>
          </ul>
        </div>
      </div>
  );
}

export default CourierBoard;