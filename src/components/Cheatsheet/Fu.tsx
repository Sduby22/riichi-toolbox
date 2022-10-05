import React from "react";
import { Paper } from "@mui/material";

function Foo() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "133%",
        }}
      >
        <Paper
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "red",
          }}
        ></Paper>
      </div>
    </div>
  );
}

export default function Fu() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Foo />
        <Foo />
      </div>
    </>
  );
}
