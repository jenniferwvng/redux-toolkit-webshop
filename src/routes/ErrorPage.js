import Header from "../components/Header";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <Header />
      <p>ErrorPage - page you're looking for does not exist</p>
      <Link to="/">
        Return to start page
      </Link>
    </div>
  );
}

export default ErrorPage;
