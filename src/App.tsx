import { Route, Routes, Navigate } from "react-router";
import AuthPage from "./pages/AuthPage";
import { ROUTES } from "./constants/routes";
import { useAuthStore } from "./store/auth";
import HomePage from "./pages/HomePage";
import GroupsSidebar from "./components/homePage/left-sidebar/GroupsSidebar";
import ServerSidebar from "./components/homePage/left-sidebar/ServerSidebar";

export default function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to={ROUTES.HOME} replace />
          ) : (
            <Navigate to={ROUTES.AUTH} replace />
          )
        }
      />
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
      >
        <Route index element={<Navigate to={ROUTES.ME} replace />} />
        <Route path={ROUTES.ME} element={<GroupsSidebar />}>
          <Route index element={<Navigate to={ROUTES.CHAT_ID} />} />
          <Route path={ROUTES.CHAT_ID} />
        </Route>
        <Route path={ROUTES.SERVER_ID} element={<ServerSidebar />}>
          <Route index element={<Navigate to={ROUTES.SERVER_BRACH_ID} />} />
          <Route path={ROUTES.SERVER_BRACH_ID} />
        </Route>
      </Route>
    </Routes>
  );
}
