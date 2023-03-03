import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import News from "./News";
import ProfilePage from "./Profile";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="news" element={<News />} />
      <Route path="news/:id" element={<ProfilePage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route>404 Not Found!</Route>
    </Routes>
  );
};

export default RouterList;
