import React, { FunctionComponent } from "react";

const FullPage: FunctionComponent = props => {
  return (
    <div>
      fullpage layout
      <main>
        <div>{props.children}</div>
      </main>
    </div>
  );
};

export default FullPage;
