import React, { Component } from "react";
import { connect } from "react-redux";
import { addSeat, deleteSeat } from "../../Redux/action";
import style from "./Home.module.css";
export class SeatList extends Component {
  // toogleCheck = (seat) => {
  //   this.props.dispatch(addSeat(seat));
  // };
  handleChange =(e) => { 
    if(e.target.checked){
      this.props.dispatch(addSeat(e.target.value))
    }else{
      this.props.dispatch(deleteSeat(e.target.value))
    }
   }
  render() {
    return (
      <div>
        <h4 className="text-white fs-4">Màn hình</h4>
        <div>
          <table className="table">
            <tbody>
              {this.props.data?.map((seatRow) => {
                if (seatRow.hang === "") {
                  return (
                    <tr key={seatRow.hang}>
                      <th className="text-warning fs-4 border-0">
                        {seatRow.hang}
                      </th>
                      {seatRow.danhSachGhe.map((seat) => {
                        return (
                          <td key={seat.soGhe} className="border-0">
                            <span className="text-center text-warning fs-4">
                              {seat.soGhe}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  );
                } else {
                  return (
                    <tr key={seatRow.hang}>
                      <th className="text-warning fs-4 border-0">
                        {seatRow.hang}
                      </th>
                      {seatRow.danhSachGhe.map((seat) => {
                        return (
                          <td key={seat.soGhe} className="border-0">
                            
                            <input
                            checked={seat.daDat}
                              onChange={this.handleChange}
                              // onClick={() => this.toogleCheck(seat)}
                              type={"checkbox"}
                              className={style.ghe}
                              // disabled={seat.daDat}
                              value={seat.soGhe}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  );
                }
              })}
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

export default connect(mapStateToProp)(SeatList);
