import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { IRouterRenderProps } from "../models";

const RouterRender = ({ routers }: IRouterRenderProps) => {
  return (
    <Routes>
      {routers.map(({ component: Component, path, ...rest }) => (
        <Route
          element={
            <Suspense fallback={<>Loading...</>}>
              <Component />
            </Suspense>
          }
          key={path}
          path={path}
          {...rest}
        />
      ))}
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Not Found!</p>
          </main>
        }
      />
    </Routes>
  );
};
export default RouterRender;