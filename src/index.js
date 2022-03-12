import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const testimonialDetail = [
  {
    id: "c1",
    para: "Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.",
    img1: "https://img.icons8.com/ultraviolet/40/000000/quote-left.png",
    img2: "https://img.icons8.com/bubbles/100/000000/edit-user.png",
    custname: "Ankit Bisen",
    custProfession: "Front End Developer",
  },
  {
    id: "c2",
    para: "Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.",
    img1: "https://img.icons8.com/ultraviolet/40/000000/quote-left.png",
    img2: "https://img.icons8.com/bubbles/100/000000/edit-user.png",
    custname: "Ankit Bisen",
    custProfession: "Front End Developer",
  },
  {
    id: "c3",
    para: "Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.",
    img1: "https://img.icons8.com/ultraviolet/40/000000/quote-left.png",
    img2: "https://img.icons8.com/bubbles/100/000000/edit-user.png",
    custname: "Ankit Bisen",
    custProfession: "Front End Developer",
  },
  {
    id: "c4",
    para: "Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.",
    img1: "https://img.icons8.com/ultraviolet/40/000000/quote-left.png",
    img2: "https://img.icons8.com/bubbles/100/000000/edit-user.png",
    custname: "Ankit Bisen",
    custProfession: "Front End Developer",
  },
  {
    id: "c5",
    para: "Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.",
    img1: "https://img.icons8.com/ultraviolet/40/000000/quote-left.png",
    img2: "https://img.icons8.com/bubbles/100/000000/edit-user.png",
    custname: "Ankit Bisen",
    custProfession: "Front End Developer",
  },
  {
    id: "c6",
    para: "Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.",
    img1: "https://img.icons8.com/ultraviolet/40/000000/quote-left.png",
    img2: "https://img.icons8.com/bubbles/100/000000/edit-user.png",
    custname: "Ankit Bisen",
    custProfession: "Front End Developer",
  },
];

const carouselItem = testimonialDetail.map((card) => (
  <Item key={card.id}>
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          <img
            src={card.img1}
            alt="img"
          />
        </h4>
        <div className="template-demo">
          <p>
            {card.para}
          </p>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-2">
            <img
              className="profile-pic"
              src={card.img2}
              alt='img'
            />
          </div>
          <div className="col-sm-10">
            <div className="profile">
              <h4 className="cust-name">{card.custname}</h4>
              <p className="cust-profession">{card.custProfession}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Item>
));

const App = () => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" ,marginBottom: '0px'}}>Carousel Testimonial</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          {carouselItem}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
