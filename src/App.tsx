import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./features/privateRoute/privateRoute";

const MainPage = lazy(() => import("./pages/main/main"));
const StartPage = lazy(() => import("./pages/start/startPage"));
const Loader = lazy(() => import("./components/loading/loader"));
const App: FC = () => {
  return (
    <div className="w-screen h-screen justify-center">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/auth" element={<StartPage />} />

          <Route path="/" element={<PrivateRoute outlet={<MainPage />} />} />

          <Route
            path="/*"
            element={
              <div className="flex flex-col  items-center w-screen h-screen">
                <h2 className="text-2xl mt-12">404</h2>
                <p className="text-lg">Not found</p>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
