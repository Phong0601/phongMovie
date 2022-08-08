import React, { Component, useEffect } from "react";
import style from "./Home.module.css";
import { connect } from "react-redux";
import { addSeat, complete } from "../../Redux/action";
export class SelectSeat extends Component {
  handleDelete = (seat) => {
    this.props.dispatch(addSeat(seat));
  };
  handleSubmit = () => {
   console.log(this.props.ticket);
   this.props.dispatch(complete(this.props.ticket))
  };

  render() {
    const total = this.props.ticket.reduce((total, cuurentItem) => total=cuurentItem.gia + total,0);
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
            
              </tr>
            </thead>
            <tbody>
              {this.props.ticket?.map((item) => {
                return (
                  <tr key={item.soGhe} className="text-warning">
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                   
                  </tr>
                );
              })}
              <tr>
                <td>Tổng tiền</td>
                <td className="text-warning">
                 {total}
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
