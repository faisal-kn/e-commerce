// import {getProduct} from "../apicall/RainforestApi/Apicalls";
import {useSelector} from "react-redux";
import Cards from "../components/Cards";
import { Row, Col } from "react-bootstrap";
import dataArray from "../data/Data";

const Home = () => {
  // const data=useSelector(state=>{
  //   console.log(state);
  //   return state.DataAll});
  
  // const clickHandler = () => {
  //   // getProduct()
  //   console.log(data.products);

  // };

//   const dataArray=[{title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"},
//     {title:"boAt Airdopes",price:"₹1,299.00",img:"https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg"}
// ]

  return (
    <div>
        {/* <button onClick={clickHandler}>hello there</button> */}
      
      <Row xs={1} md={3} lg={5} className="g-4">
        {
          dataArray.map(({title,price,img})=>{
              return(<Col>
                <Cards title={title} price={price} img={img}/>
              </Col>);
          })
        }
      </Row>
      {/* <Cards/> */}
    </div>
  );
};

export default Home;
