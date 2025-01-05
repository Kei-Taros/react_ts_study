import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Study Menu</h2>
      <nav>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </nav>
    </div>
  );
};

export default Home;
