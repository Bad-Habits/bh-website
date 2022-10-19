import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";

const Admin = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isAdmin) navigate("../");
  }, [user, navigate]);

  return <div>Admin</div>;
};

export default Admin;
