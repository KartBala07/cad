import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { LessonPage } from "./pages/LessonPage";
import { Resources } from "./pages/Resources";
import { Profile } from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/lesson/:lessonId" element={<LessonPage />} />
    </Routes>
  );
}
