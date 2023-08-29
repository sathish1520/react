import React from 'react'
import Banner from '../assets/images/73-734350_food-dish-top-view-png-food-banner-psd-removebg-preview.png'
import all from '../assets/images/order-food.png'
import fish from '../assets/images/fish.png'
import chicken from '../assets/images/turkey.png'
import pizza from '../assets/images/pizza.png'
import burger from '../assets/images/burger.png'
import pasta from '../assets/images/spaguetti.png'
import beef from '../assets/images/meat.png'
import asian from '../assets/images/noodles.png'
import appfee from '../assets/images/serving-dish.png'
import timer from '../assets/images/clock.png'
import doller from '../assets/images/dollar.png'
import minus from '../assets/images/minus.png'
import plus from '../assets/images/plus.png'
import delete1 from '../assets/images/trash-bin.png';
import data from './Data';
import Orders from './orderData'

const Dashboard = () => {
  console.log(data)
  return (
    <div style={{ display: "flex" }}>
      <div className='total_dash'>
        <div className='search_head'>
          <i className="fa fa-bars" style={{ fontSize: "28px" }}></i>
          <select className='address' name="address" id="address">
            <option value="volvo">125 , Easton Street...</option>

          </select>

          <input className="nosubmit" type="search" placeholder="What  would  you  like in Holiday?" />
        </div>
        <div className='banner'>
          <div>
            <h2>You don't need a silver fork <br /> to eat goof food</h2>
            <button className='learn_more'>Learn more    &rarr;</button>
          </div>
          <div className='banner_image'>
            <img src={Banner} style={{ width: "93%", height: "20%", borderRadius: "117px" }} />
          </div>
        </div>
        <div className='tab_seaction'>
          <h2>Choose from popular categories</h2>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <img src={all} style={{ width: "20px", marginRight: "5px" }} />All</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><img src={burger} style={{ width: "20px", marginRight: "5px" }} /> Burger</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><img src={pizza} style={{ width: "20px", marginRight: "5px" }} />Pizza</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-Pasta-tab" data-bs-toggle="pill" data-bs-target="#pills-Pasta" type="button" role="tab" aria-controls="pills-Pasta" aria-selected="false"><img src={pasta} style={{ width: "20px", marginRight: "5px" }} />Pasta</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-asian-tab" data-bs-toggle="pill" data-bs-target="#pills-asian" type="button" role="tab" aria-controls="pills-asian" aria-selected="false"><img src={asian} style={{ width: "20px", marginRight: "5px" }} />Asian</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-Beef-tab" data-bs-toggle="pill" data-bs-target="#pills-Beef" type="button" role="tab" aria-controls="pills-Beef" aria-selected="false"><img src={beef} style={{ width: "20px", marginRight: "5px" }} />Beef</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-Chicken-tab" data-bs-toggle="pill" data-bs-target="#pills-Chicken" type="button" role="tab" aria-controls="pills-Chicken" aria-selected="false"><img src={chicken} style={{ width: "20px", marginRight: "5px" }} />Chicken</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-fish-tab" data-bs-toggle="pill" data-bs-target="#pills-fish" type="button" role="tab" aria-controls="pills-fish" aria-selected="false"><img src={fish} style={{ width: "20px", marginRight: "5px" }} />Fish</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className='card_flex'>

                {data.map((item) => {
                  return <div className='card_details'>
                    <img src={item.image} style={{ width: "204px", height: "140px", borderRadius: "11px" }} />
                    <h3 className='rest_name'>{item.restaurant_name}</h3>
                    <div style={{ marginBottom: "7px" }}>
                      <img src={timer} style={{ width: "17px", height: "17px" }} />
                      <span style={{ margin: "0 44px 0 10px", color: "#c5c5c5" }}>{item.Min}</span>
                      <img src={doller} style={{ width: "17px", height: "17px" }} />
                      <img src={doller} style={{ width: "17px", height: "17px", marginLeft: "9px" }} />
                    </div>
                    <img src={appfee} style={{ width: "17px", height: "17px" }} />
                    <span style={{ marginLeft: "9px", color: "#c5c5c5" }}>$ 3.99 delivery fee</span>
                  </div>
                })}
                <div>
                </div>

              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className='card_flex'>

                {data.map((item) => {
                  return <div className='card_details'>
                    <img src={item.image} style={{ width: "204px", height: "140px", borderRadius: "11px" }} />
                    <h3 className='rest_name'>{item.restaurant_name}</h3>
                    <div style={{ marginBottom: "7px" }}>
                      <img src={timer} style={{ width: "17px", height: "17px" }} />
                      <span style={{ margin: "0 44px 0 10px", color: "#c5c5c5" }}>{item.Min}</span>
                      <img src={doller} style={{ width: "17px", height: "17px" }} />
                      <img src={doller} style={{ width: "17px", height: "17px", marginLeft: "9px" }} />
                    </div>
                    <img src={appfee} style={{ width: "17px", height: "17px" }} />
                    <span style={{ marginLeft: "9px", color: "#c5c5c5" }}>$ 3.99 delivery fee</span>
                  </div>
                })}
                <div>
                </div>

              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <div className='card_flex'>

                {data.map((item) => {
                  return <div className='card_details'>
                    <img src={item.image} style={{ width: "204px", height: "140px", borderRadius: "11px" }} />
                    <h3 className='rest_name'>{item.restaurant_name}</h3>
                    <div style={{ marginBottom: "7px" }}>
                      <img src={timer} style={{ width: "17px", height: "17px" }} />
                      <span style={{ margin: "0 44px 0 10px", color: "#c5c5c5" }}>{item.Min}</span>
                      <img src={doller} style={{ width: "17px", height: "17px" }} />
                      <img src={doller} style={{ width: "17px", height: "17px", marginLeft: "9px" }} />
                    </div>
                    <img src={appfee} style={{ width: "17px", height: "17px" }} />
                    <span style={{ marginLeft: "9px", color: "#c5c5c5" }}>$ 3.99 delivery fee</span>
                  </div>
                })}
                <div>
                </div>

              </div>
            </div>
            <div className="tab-pane fade" id="pills-Pasta" role="tabpanel" aria-labelledby="pills-Pasta-tab">
              <div className='card_flex'>

                {data.map((item) => {
                  return <div className='card_details'>
                    <img src={item.image} style={{ width: "204px", height: "140px", borderRadius: "11px" }} />
                    <h3 className='rest_name'>{item.restaurant_name}</h3>
                    <div style={{ marginBottom: "7px" }}>
                      <img src={timer} style={{ width: "17px", height: "17px" }} />
                      <span style={{ margin: "0 44px 0 10px", color: "#c5c5c5" }}>{item.Min}</span>
                      <img src={doller} style={{ width: "17px", height: "17px" }} />
                      <img src={doller} style={{ width: "17px", height: "17px", marginLeft: "9px" }} />
                    </div>
                    <img src={appfee} style={{ width: "17px", height: "17px" }} />
                    <span style={{ marginLeft: "9px", color: "#c5c5c5" }}>$ 3.99 delivery fee</span>
                  </div>
                })}
                <div>
                </div>

              </div>
            </div>
            <div className="tab-pane fade" id="pills-asian" role="tabpanel" aria-labelledby="pills-asian-tab">
              <div className='card_flex'>

                {data.map((item) => {
                  return <div className='card_details'>
                    <img src={item.image} style={{ width: "204px", height: "140px", borderRadius: "11px" }} />
                    <h3 className='rest_name'>{item.restaurant_name}</h3>
                    <div style={{ marginBottom: "7px" }}>
                      <img src={timer} style={{ width: "17px", height: "17px" }} />
                      <span style={{ margin: "0 44px 0 10px", color: "#c5c5c5" }}>{item.Min}</span>
                      <img src={doller} style={{ width: "17px", height: "17px" }} />
                      <img src={doller} style={{ width: "17px", height: "17px", marginLeft: "9px" }} />
                    </div>
                    <img src={appfee} style={{ width: "17px", height: "17px" }} />
                    <span style={{ marginLeft: "9px", color: "#c5c5c5" }}>$ 3.99 delivery fee</span>
                  </div>
                })}
                <div>
                </div>

              </div>
            </div>
            <div className="tab-pane fade" id="pills-Beef" role="tabpanel" aria-labelledby="pills-Beef-tab">
              <div className='card_flex'>

                {data.map((item) => {
                  return <div className='card_details'>
                    <img src={item.image} style={{ width: "204px", height: "140px", borderRadius: "11px" }} />
                    <h3 className='rest_name'>{item.restaurant_name}</h3>
                    <div style={{ marginBottom: "7px" }}>
                      <img src={timer} style={{ width: "17px", height: "17px" }} />
                      <span style={{ margin: "0 44px 0 10px", color: "#c5c5c5" }}>{item.Min}</span>
                      <img src={doller} style={{ width: "17px", height: "17px" }} />
                      <img src={doller} style={{ width: "17px", height: "17px", marginLeft: "9px" }} />
                    </div>
                    <img src={appfee} style={{ width: "17px", height: "17px" }} />
                    <span style={{ marginLeft: "9px", color: "#c5c5c5" }}>$ 3.99 delivery fee</span>
                  </div>
                })}
                <div>
                </div>

              </div>
            </div>
            <div className="tab-pane fade" id="pills-Chicken" role="tabpanel" aria-labelledby="pills-Chicken-tab">
              <div className='card_flex'>

                {data.map((item) => {
                  return <div className='card_details'>
                    <img src={item.image} style={{ width: "204px", height: "140px", borderRadius: "11px" }} />
                    <h3 className='rest_name'>{item.restaurant_name}</h3>
                    <div style={{ marginBottom: "7px" }}>
                      <img src={timer} style={{ width: "17px", height: "17px" }} />
                      <span style={{ margin: "0 44px 0 10px", color: "#c5c5c5" }}>{item.Min}</span>
                      <img src={doller} style={{ width: "17px", height: "17px" }} />
                      <img src={doller} style={{ width: "17px", height: "17px", marginLeft: "9px" }} />
                    </div>
                    <img src={appfee} style={{ width: "17px", height: "17px" }} />
                    <span style={{ marginLeft: "9px", color: "#c5c5c5" }}>$ 3.99 delivery fee</span>
                  </div>
                })}
                <div>
                </div>

              </div>
            </div>
            <div className="tab-pane fade" id="pills-fish" role="tabpanel" aria-labelledby="pills-fish-tab">
              <div className='card_flex'>

                {data.map((item) => {
                  return <div className='card_details'>
                    <img src={item.image} style={{ width: "204px", height: "140px", borderRadius: "11px" }} />
                    <h3 className='rest_name'>{item.restaurant_name}</h3>
                    <div style={{ marginBottom: "7px" }}>
                      <img src={timer} style={{ width: "17px", height: "17px" }} />
                      <span style={{ margin: "0 44px 0 10px", color: "#c5c5c5" }}>{item.Min}</span>
                      <img src={doller} style={{ width: "17px", height: "17px" }} />
                      <img src={doller} style={{ width: "17px", height: "17px", marginLeft: "9px" }} />
                    </div>
                    <img src={appfee} style={{ width: "17px", height: "17px" }} />
                    <span style={{ marginLeft: "9px", color: "#c5c5c5" }}>$ 3.99 delivery fee</span>
                  </div>
                })}
                <div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='my_orders'>
        <h1 className='head_order'>My Order</h1>
        {Orders?.map((item) => {
          return <div className='total_order'>
            <div>
              <img style={{ width: "140px", height: "90px", borderRadius: "11px" }} src={item.image} />

            </div>
            <div className='item_name'>
              <h5>Sushi Set A</h5>
              <div className='add_item'>
                <img src={minus} style={{ width: "15px", height: "15px" }} />
                <span>1</span>
                <img src={plus} style={{ width: "13px", height: "15px" }} />

              </div>

            </div>
            <div className='item_amount'>
              <h5>$79.99</h5>
              <img src={delete1} style={{ width: "25px", height: "25px", marginTop: "15px" }} />
            </div>
          </div>
        })}
        <div className='coupen_sec'>
          <span>You have 3 coupons</span>
          <button className='coupen_bttn'>Use now</button>
        </div>
        <div className='amount_total'>
          <div className='total_flex'>
            <h5>Sub total</h5>
            <h6>$256.30</h6>
          </div>
          <div className='total_flex'>
            <h5>Delivery fee</h5>
            <h6>$6.20</h6>
          </div>
          <div className='total_flex'>
            <h5>Taxes</h5>
            <h6>$36.20</h6>
          </div>
        </div>
        <div className='final_total'>
          <div className='total12_flex'>
            <h5>Total</h5>
            <h6>$356.30</h6>
          </div>
          <div className='order_bttn'>
            <button className='order_checkout'>Order and checkout &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;