import React, { Component, useEffect } from "react";
import style from "./Home.module.css";
import { connect } from "react-redux";
import { addSeat } from "../../Redux/action";
export class SelectSeat extends Component {
  handleDelete = (seat) => {
     
    this.props.dispatch(addSeat(seat));
  };
  handleSubmit = () => {
  
    this.props.ticket.map((item) => {
    
      return item.daDat = true
    });
  };
  sumTotal=()=>{
    console.log(this.props.ticket);
  }
  render() {
    
    return (
      <div className="selectSeat mt-5">
        <div className="selectSeat-top">
          <div className="d-flex mt-2">
            <div className={style.gheDuocChon}></div>
            <span className="text-white fs-4 mx-3">Ghế đã đặt</span>
          </div>
          <div className="d-flex mt-2">
            <div className={style.gheDangChon}></div>
            <span className="text-white fs-4 mx-3">Ghế đang chọn</span>
          </div>
          <div className="d-flex mt-2">
            <div className={style.gheChuaChon}></div>
            <span className="text-white fs-4 mx-3">Ghế chưa đặt</span>
          </div>
        </div>
        <div className="selectSeat-body mt-4">
          <table className="table table-bordered text-white w-500">
            <thead>
              <tr>
                <th scope="col">Số ghế</th>
                <th scope="col">Giá</th>
                <th scope="col">Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.props.ticket?.map((item) => {
               
                return (
                  <tr key={item.soGhe} className="text-warning">
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(item)}
                        style={{ color: "red" }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>Tổng tiền</td>
                <td className="text-warning">300000</td>
                <td>
                  <button onClick={() => this.handleSubmit()}>Thanh Toán</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    ticket: state.addValue.check,
  };
};
export default connect(mapStateToProp)(SelectSeat);