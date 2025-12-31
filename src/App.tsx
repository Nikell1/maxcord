import { Routes, Route, Navigate } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";
import { ROUTES } from "./constants/routes";
import { useAuthStore } from "./store/auth";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import AuthPage from "./pages/auth/AuthPage";
import RegisterBlock from "./pages/auth/blocks/RegisterBlock";
import LoginBlock from "./pages/auth/blocks/LoginBlock";
import GroupsSidebar from "./pages/home/blocks/sidebar/GroupsSidebar";
import ServerSidebar from "./pages/home/blocks/sidebar/ServerSidebar";

export default function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? ROUTES.HOME : ROUTES.AUTH} />}
      />
      <Route path={ROUTES.AUTH} element={<AuthPage />}>
        <Route index element={<Navigate to={ROUTES.LOGIN} replace />} />
        <Route
          path={ROUTES.LOGIN}
          element={
            isAuthenticated ? (
              <Navigate to={ROUTES.HOME} replace />
            ) : (
              <LoginBlock />
            )
          }
        />
        <Route
          path={ROUTES.REG}
          element={
            isAuthenticated ? (
              <Navigate to={ROUTES.HOME} replace />
            ) : (
              <RegisterBlock />
            )
          }
        />
      </Route>

      <Route
        path={ROUTES.HOME}
        element={
          <ProtectedRoute
            condition={isAuthenticated}
            redirectPath={ROUTES.LOGIN}
          >
            <HomePage />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to={ROUTES.DIRECT + "0"} />} />
        <Route path={ROUTES.DIRECT + ":chatId"} element={<GroupsSidebar />} />
        <Route
          path={ROUTES.SERVER + ":serverId" + "/:branchId"}
          element={<ServerSidebar />}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
