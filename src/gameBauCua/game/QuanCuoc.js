import { Button } from "bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";

const Quancuoc = (props) => {
  const dispatch = useDispatch();

  const { quanCuoc } = props;

  return (
    <div className="mt-3 text-center">
      <img src={quanCuoc.hinhAnh} style={{ width: "250px" }} />
      <div
        className=" bg-success mt-2 pb-2 text-center"
        style={{ borderRadius: "10px", width: 250, display: "inline-block" }}
      >
        <button
          onClick={() => {
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: true,
            });
          }}
          className="btn btn-danger mr-3 mt-2"
          style={{ fontSize: 27 }}
        >
          <i class="fa-solid fa-plus"></i>
        </button>
        <span className="m-2" style={{ color: "yellow", fontSize: "25px" }}>
          {quanCuoc.diemCuoc}
        </span>
        <button
          onClick={() => {
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: false,
            });
          }}
          className="btn btn-danger ml-3 mt-2"
          style={{ fontSize: 27 }}
        >
          <i class="fa-solid fa-minus"></i>
        </button>
      </div>
    </div>
  );
};

export default Quancuoc;
