import React, { FunctionComponent } from "react";

const FullPage: FunctionComponent = props => {
  return (
    <div>
      <main>
        <div>{props.children}</div>
      </main>
    </div>
  );
};

export default FullPage;
