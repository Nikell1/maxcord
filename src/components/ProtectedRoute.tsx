import { Navigate } from "react-router";

interface IProtectedRouteProps {
  children: React.ReactNode;
  condition: boolean;
  redirectPath: string;
}

export default function ProtectedRoute({
  children,
  condition,
  redirectPath,
}: IProtectedRouteProps) {
  if (!condition) return <Navigate to={redirectPath} replace />;
  return <>{children}</>;
}
