import Navbar from "./components/navbar/Navbar";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Publishers from "./pages/publishers/Publishers";
import Articles from "./pages/articles/Articles";
import News from "./pages/news/News";
import Education from "./pages/education/Education";
import CourseList from "./pages/education/CourseList";
import CourseRequest from "./pages/education/CourseRequest"
import RunningCourse from "./pages/education/RunningCourse";
import CourseSearch from "./pages/education/CourseSearch";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/news" element={<News />} />
        <Route path="/education" element={<Education />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/courserequest" element={<CourseRequest />} />
        <Route path="/runningcourse" element={<RunningCourse />} />
        <Route path="/coursesearch" element={<CourseSearch />} />
      </Routes>
    </>
  );
}

export default App;
