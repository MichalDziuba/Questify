import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./features/privateRoute/privateRoute";
import { useAppSelector } from "./app/hooks";

const MainPage = lazy(() => import("./pages/main/main"));
const StartPage = lazy(() => import("./pages/start/startPage"));
const Loader = lazy(() => import("./components/loader/loader"));
const App: FC = () => {
  return (
    <div className="w-screen h-screen justify-center">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/auth" element={<StartPage />} />

          <Route path="/" element={<PrivateRoute outlet={<MainPage />} />} />

          <Route path="*" element={<div>Nothing's here</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
