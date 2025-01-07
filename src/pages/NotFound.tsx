import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>
  );
};

export default NotFound;
