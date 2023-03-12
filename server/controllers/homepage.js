const getHomepage = (req, res) => {
  res.send(
    `<div><a href='./complaints'>Complaints</a>
  <a href='./couriers'>couriers</a>
  <a href='./lostnfound'>lostnfound</a>
  <a href='./notice'>notice</a></div>`
  );
};

module.exports = { getHomepage };
