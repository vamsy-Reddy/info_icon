import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Tooltip, Icon, Row } from "antd";

ReactDOM.render(
  <div style={{ marginTop: 25 }}>
    <Row style={{ display: "flex" }}>
      <h1>namste</h1>
      <Tooltip placement="topLeft" title="Prompt Text">
        <Icon
          type="info-circle"
          style={{ fontSize: "16px", color: "#08c", margin: 13 }}
        />
      </Tooltip>
    </Row>
  </div>,
  document.getElementById("container")
);
