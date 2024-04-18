import { Navigate } from "react-router-dom";

function ProtectedRote({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/signup" />;
  }
}

export default ProtectedRote;
