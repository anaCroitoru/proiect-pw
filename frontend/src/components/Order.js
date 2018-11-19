import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    orders: []
  };

  componentDidMount() {
    const { mail } = this.props;
    console.log(mail);
    axios.get("http://localhost:8090/api/order/" + mail).then(res => {
      // console.log(res.data);
      this.setState({
        orders: res.data
      });
    });
  }

  render() {
    const orders = this.state.orders;

    const ordersList = orders.length ? (
      orders.map(order => {
        return (
          <div className="row">
            <div className="col s12 m5">
              <div className="card-panel teal">
                <span className="white-text">
                  <p> order made on:{order.localDate}</p>
                  <p>Total price :{order.price}lei</p>
                </span>
              </div>
            </div>
          </div>

          /* </div>
          <div className="card-panel teal" key={order.id}>
            <div className="card-content">
              <span className="card-title">
                order made on:{order.localDate}
              </span>
              <p>Total price :{order.price}lei</p>
            </div>
          </div> */
        );
      })
    ) : (
      <div className="center">No orders</div>
    );
    return (
      <div className="container">
        <p>Your orders:</p>
        {ordersList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mail: state.mail
  };
};

export default connect(mapStateToProps)(Home);

//export default Home;
