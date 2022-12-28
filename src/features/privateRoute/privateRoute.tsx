import { useAppSelector } from "../../app/hooks";
import { Navigate} from "react-router-dom";


type privateRouteProps = {
  outlet: JSX.Element;
};

export const PrivateRoute = ({ outlet }: privateRouteProps) => {
  const token = useAppSelector((state) => state.app.userToken);

  return !token ? <Navigate to="/auth" replace /> : outlet;
};
