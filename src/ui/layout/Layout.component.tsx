import React from "react";

const style: any = {
  layoutComponentContainer: {
    padding: "3rem"
  }
};

const LayoutComponent = ({ children }: any) => (
  <div style={style.layoutComponentContainer}>{children}</div>
);

export default LayoutComponent;
