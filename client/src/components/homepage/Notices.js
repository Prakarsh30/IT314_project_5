import "./Notices_style.css"

function Notices() {
  const examples = [
    {
      Heading: "H1",
      content: "C1"
    },
    {
      Heading: "H2",
      content: "C2"
    },
    {
      Heading: "H3",
      content: "C3"
    },
    {
      Heading: "H4",
      content: "C4"
    },
  ];
  return (
    <div className="news-card">
        <div className="news-header">
          <h2>Latest News</h2>
        </div>
        <div className="news-body">
          <ul className="news-list">
          {examples.map((example, index) => (
            <li key={index}><a href="#"><h5><b>{example.Heading}:</b></h5> <li>{example.content}</li></a></li>
          ))}
            {/* <li><a href="#">Headline 1</a></li>
            <li><a href="#">Headline 2</a></li>
            <li><a href="#">Headline 3</a></li>
            <li><a href="#">Headline 4</a></li> */}
          </ul>
          <ul><li><a href="/NoticeBoard">More...</a></li></ul>
        </div>
      </div>
  );
}

export default Notices;
