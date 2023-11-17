import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./FooterComponent";
import Header from "./HeaderComponent";
import ListTodoComponent from "./ListTodoComponent";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import "./TodoApp.css";
import WelcomeComponent from "./WelcomeComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";

const AuthRoute = ({ children }) => {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
const TodoApp = () => {
  return (
    <div className="TodoApp">
      {/* 컨텍스트를 아래의 모든 컴포넌트에 제공하기 위해 감싸준다. */}
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />

            <Route
              path="/welcome/:name"
              element={
                <AuthRoute>
                  <WelcomeComponent />
                </AuthRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthRoute>
                  <ListTodoComponent />
                </AuthRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutComponent />
                </AuthRoute>
              }
            />

            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default TodoApp;
