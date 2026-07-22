import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { login } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Login() {
  const navigate = useNavigate();

  const { loginSuccess } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleLogin() {
    try {
      await login(username, password);

      loginSuccess();

      navigate("/dashboard");

    } catch {

      setError("Invalid username or password.");

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <Card className="w-full max-w-md">

        <h1 className="text-3xl font-bold mb-2">
          Login
        </h1>

        <p className="mb-6">
          <Link
            to="/"
            className="text-purple-400 hover:text-purple-300"
          >
            ← Back to Home
          </Link>
        </p>

        <div className="space-y-4">

          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-400">
              {error}
            </p>
          )}

          <Button
            className="w-full"
            onClick={handleLogin}
          >
            Login
          </Button>

          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Register
            </Link>
          </p>

        </div>

      </Card>

    </div>
  );
}