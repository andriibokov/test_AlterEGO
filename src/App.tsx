import RouterList from "./pages/RouterList";
import './App.scss'
import Header from "./components/header/Header";
import { fetchPosts } from "./redux/news/action";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/useTypedSelector";

const App = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchPosts());
    }, []);

  return (
    <div className="App">
      <>
        <Header />
        <RouterList />
      </>
    </div>
  );
}

export default App
