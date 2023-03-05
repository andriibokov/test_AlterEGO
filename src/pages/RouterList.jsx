import { Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import News from "./News/News";
import ProfilePage from "./Profile/ProfilePage";

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
