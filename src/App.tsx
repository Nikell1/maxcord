import { Route, Routes, useNavigate } from "react-router";
import AuthPage from "./pages/AuthPage";
import { useEffect } from "react";
import { ROUTES } from "./constants/routes";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTES.AUTH);
  });

  return (
    <>
      <Routes>
        <Route path={ROUTES.AUTH} element={<AuthPage />} />
      </Routes>
    </>
  );
}
