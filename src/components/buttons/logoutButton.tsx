import { RiLogoutCircleRLine } from "react-icons/ri";

type logoutButtonProps = {
    handleLogout:()=>void
}
export const LogoutButton = ({ handleLogout }: logoutButtonProps) => {
  return (
    <button data-bs-toggle="tooltip" data-bs-placement="right" title="Logout ">
      <RiLogoutCircleRLine
        className="fill-navy w-8 h-8 ml-2 transition duration-150 hover:-rotate-90"
        onClick={handleLogout}
      />
    </button>
  );
};