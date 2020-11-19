import React from "react";
import Preloader from "../Common/Preloader/preloader";

export const WithSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<Preloader />}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};
