
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ children, layout: Layout, path }) => (
          <Route
            key={path}
            path={path}
            element={<Layout routers={children} />}
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
    </BrowserRouter>
  );
}