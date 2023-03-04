import RouterList from "./pages/RouterList";
import './App.scss'
import Header from "./components/header/Header";
import { fetchPosts } from "./redux/news/action";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/useTypedSelector";
import { LoggedIn } from "./redux/user/action";

const App = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
      const stor = localStorage.getItem("isAuth");
     
      if (!!stor) dispatch(LoggedIn(stor, true));
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
