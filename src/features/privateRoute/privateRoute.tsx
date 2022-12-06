import { useAppSelector } from "../../app/hooks";
import { Navigate} from "react-router-dom";


type PrivateRouteProps = {

    outlet: JSX.Element;
}

export const PrivateRoute = ({outlet}:PrivateRouteProps) => {
    const token = useAppSelector(state => state.app.userToken);
    return !token ? <Navigate to="/auth" replace /> : outlet;
};
