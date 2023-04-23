import "./Courier_board_style.css"

function CourierBoard() {
  const examples = [
    {
      Date: "D1",
      Name: "C1"
    },
    {
      Date: "D2",
      Name: "C2"
    },
    {
      Date: "D3",
      Name: "C3"
    },
    {
      Date: "D4",
      Name: "C4"
    },
  ];
  return (
    <div className="courier-card">
        <div className="courier-header">
          <h2>Latest courier</h2>
        </div>
        <div className="courier-body">
          <ul className="courier-list">
          {examples.map((example, index) => (
            <li key={index}><a href="#"><h5><b>{example.Date}:</b></h5> <li>{example.Name}</li></a></li>
          ))}
            {/* <li><a href="#">Headline 1</a></li>
            <li><a href="#">Headline 2</a></li>
            <li><a href="#">Headline 3</a></li>
            <li><a href="#">Headline 4</a></li> */}
          </ul>
          <ul><li><a href="/complaints">More...</a></li></ul>
        </div>
      </div>
  );
}

export default CourierBoard;