import { useAppSelector } from "../../app/hooks";
import { Navigate} from "react-router-dom";


type props = {
  outlet: JSX.Element;
};

export const PrivateRoute = ({ outlet }: props) => {
  const token = useAppSelector((state) => state.app.userToken);

  return !token ? <Navigate to="/auth" replace /> : outlet;
};
