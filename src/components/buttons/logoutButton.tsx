import { RiLogoutCircleRLine } from "react-icons/ri";

type Props = {
    handleLogout:()=>void
}
export const LogoutButton = ({handleLogout}:Props) => {
    return (
      <button >
        <RiLogoutCircleRLine
          className="fill-navy w-8 h-8 ml-2"
          onClick={handleLogout}
        />
      </button>
    );
}