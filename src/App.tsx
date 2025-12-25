import { Route, Routes, Navigate } from "react-router";
import AuthPage from "./pages/AuthPage";
import { ROUTES } from "./constants/routes";
import { useAuthStore } from "./store/auth";
import HomePage from "./pages/HomePage";

export default function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Routes>
      <Route
        path={ROUTES.AUTH}
        element={
          isAuthenticated ? <Navigate to={ROUTES.HOME} replace /> : <AuthPage />
        }
      />
      <Route
        path={ROUTES.HOME}
        element={
          isAuthenticated ? <HomePage /> : <Navigate to={ROUTES.AUTH} replace />
        }
      />
    </Routes>
  );
}
