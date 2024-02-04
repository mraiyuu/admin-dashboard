import React from "react";

import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      type={type}
      xName="xval"
      yName="yval"
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>

    // Alternative sparkline component
    // <SparklineComponent
    //   id={id}
    //   height={height}
    //   width={width}
    //   lineWidth={1}
    //   valueType="Numeric"
    //   fill={color}
    //   type={type}
    //   border={{ color: currentColor, width: 2 }}
    //   dataSource={[
    //     { x: 1, yval: 2 },
    //     { x: 2, yval: 6 },
    //     { x: 3, yval: 8 },
    //     { x: 4, yval: 5 },
    //     { x: 5, yval: 10 },
    //   ]}
    //   xName="xval"
    //   yName="yval"
    // >
    //   <Inject services={[SparklineTooltip]} />
    // </SparklineComponent>
  );
};

export default SparkLine;
