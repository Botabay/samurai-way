import { Suspense } from "react";

export const withSuspenseHOC = (Component: any) => {
  return (props: any) => {
    return (
      <Suspense fallback={<div>loading ...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};
