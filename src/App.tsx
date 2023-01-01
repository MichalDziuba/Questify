import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/notFound/notFound";
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
            path="*"
            element={<NotFound/>}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
