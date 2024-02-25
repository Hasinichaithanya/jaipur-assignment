import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login-main-container">
      <div>
        <h3>Create Account</h3>
        <img
          src="https://res.cloudinary.com/dlnpuom7o/image/upload/v1708788962/l3zc2xfutkpfuxbbkcyh.png"
          alt="account"
          className="create-account-image"
        />
      </div>

      <form>
        <input type="text" placeholder="Full Name" /> <br />
        <input type="phone" placeholder="Phone" /> <br />
        <input type="email" placeholder="Email" /> <br />
        <input type="password" placeholder="Password" />
        <br />
        <Link to="/home">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
