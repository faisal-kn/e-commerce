// import {getProduct} from "../apicall/RainforestApi/Apicalls";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import { Row, Col, Container } from "react-bootstrap";
import HomeCSS from "./home.module.css";
import { useDispatch } from "react-redux";
import { showAll, showMobile, showTv, showLaptop, showMenFootWear, showWomenFootWear, showMenClothing, showWomenClothing } from "../redux/action/actionlist";
import { RiCheckboxBlankFill, RiCheckboxBlankLine } from 'react-icons/ri'

const Home = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([{ type: "All", trigger: 1, active: true },
  { type: "Mobile", trigger: 2, active: false }, { type: "Tv", trigger: 3, active: false },
  { type: "Laptop", trigger: 4, active: false }, { type: "Men's footware", trigger: 5, active: false },
  { type: "Women's footware", trigger: 6, active: false }, { type: "Men's clothing", trigger: 7, active: false },
  { type: "Women's clothing", trigger: 8, active: false }])
  const data = useSelector(state => {
    console.log(state);
    return state.DataStore
  });

  function handleCategory(option) {
    var dummy = category;
    for (let i = 0; i < dummy.length; i++) {
      if (dummy[i].trigger === option) {
        dummy[i].active = true;
        console.log(dummy[i].trigger, dummy[i].active);
      }
      else {
        dummy[i].active = false;
        console.log(dummy[i].trigger, dummy[i].active);
      }

    }
    switch (option) {
      case 1:
        dispatch(showAll());
        break;
      case 2:
        dispatch(showMobile());
        break;
      case 3:
        dispatch(showTv());
        break;
      case 4:
        dispatch(showLaptop());
        break;
      case 5:
        dispatch(showMenFootWear());
        break;
      case 6:
        dispatch(showWomenFootWear());
        break;
      case 7:
        dispatch(showMenClothing());
        break;
      case 8:
        dispatch(showWomenClothing());
        break;
      default:
        break;
    }
    setCategory(dummy);
  }



  return (
    <div className={HomeCSS.homelayout}>
      {/* <button onClick={clickHandler}>hello there</button> */}
      <div className={HomeCSS.category}>
        <h3 style={{fontFamily:"Poppins",fontWeight:700,fontSize:"18px"}}>SHOP BY:</h3>
        {
          category.map(
            (ele) => {
              if (ele.active === true)
                return <p style={{fontFamily:"Poppins",fontWeight:600,fontSize:"12px",cursor:"pointer"}} onClick={() => handleCategory(ele.trigger)}><RiCheckboxBlankFill /> {ele.type}</p>
              else
                return <p style={{fontFamily:"Poppins",fontWeight:600,fontSize:"12px",cursor:"pointer"}} onClick={() => handleCategory(ele.trigger)}><RiCheckboxBlankLine /> {ele.type}</p>
            }
          )
        }

      </div>
      <Container>
        <Row xs={2} md={3} lg={4} className="g-4">
          {
            data.map(({ title, price, img, rating }) => {
              return (<Col>
                <Cards title={title} price={price} img={img} rating={rating}/>
              </Col>);
            })
          }
        </Row>
      </Container>




    </div>
  );
};

export default Home;
