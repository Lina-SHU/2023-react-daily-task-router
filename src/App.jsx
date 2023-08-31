import './App.css';
import { HashRouter, NavLink, Routes, Route, useNavigate, Outlet, useParams } from 'react-router-dom';

// Post 元件
const Post = () => {
  return (<>
      <h1>Post 頁面</h1>
      <Outlet />
  </>)
}

// Post 子元件
const PostFile = () => {
  let params = useParams();
  return (<>
    <p>Post ID: {params.postId}</p>
  </>)
}

// logout 元件
const Logout = () => {
  let navigate = useNavigate();
  const logoutBtn = () => {
    navigate('/login');
  }
  return <button type="button" onClick={logoutBtn}>登出</button>
}

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  )
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post/post123">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/post" element={<Post/>}>
              <Route path=':postId' element={<PostFile />}></Route>
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
