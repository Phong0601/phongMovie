import React, { Component, useEffect } from "react";
import style from "./Home.module.css";
import { connect } from "react-redux";
import { addSeat, complete, deleteSeat } from "../../Redux/action";
export class SelectSeat extends Component {
 
  handleDelete = (seat) => {
    this.props.dispatch(deleteSeat(seat));
  };
  render() {
    const tinhTongTien = () => {
      let tongTien = 0;
      this.props.data.forEach((item) => {
        item.danhSachGhe.forEach((seat) => {
          if (seat.daDat) {
            tongTien += seat.gia;
          }
        });
      });
      return tongTien;
    };
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
                <th scope="col">Xóa </th>
              </tr>
            </thead>
            <tbody>
              {this.props.data?.map((item) => {
                return item.danhSachGhe?.map((seat) => {
                  if (seat.daDat === true) {
                    return (
                      <tr key={seat.soGhe} className="text-warning">
                        <td>{seat.soGhe}</td>
                        <td>{seat.gia}</td>
                        <td>
                          <button onClick={() => this.handleDelete(seat.soGhe)}>
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  }
                });
              })}
              <tr>
                <td>Tổng tiền</td>
                <td className="text-warning">{tinhTongTien()}</td>
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
    data: state.dataSeatState.dataSeat,
    // ticket: state.addValue.check,
  };
};
export default connect(mapStateToProp)(SelectSeat);
