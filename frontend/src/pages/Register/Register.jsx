import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import { register } from "../../services/auth";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  async function handleRegister() {
    try {
      await register(form);

      setMessage("✅ Registration successful! Redirecting to Login...");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      console.error(error);

      if (error.response) {
        setMessage(
          typeof error.response.data === "string"
            ? error.response.data
            : JSON.stringify(error.response.data)
        );
      } else {
        setMessage(error.message);
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <Card className="w-full max-w-md">

        <h1 className="text-3xl font-bold mb-2">
          Register
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
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value,
              })
            }
          />

          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <Button
            className="w-full"
            onClick={handleRegister}
          >
            Register
          </Button>

          {message && (
            <p className="text-center text-green-400 break-all">
              {message}
            </p>
          )}

          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>

      </Card>

    </div>
  );
}