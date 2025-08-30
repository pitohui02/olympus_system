import { useState } from "react";
import car_bg from "../assets/modern_car_bg.png";
import title from "../assets/title.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function UserRegistration() {
  // 🔹 Track input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // 🔹 Handle register button click
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/User_Registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Registration successful!");
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-fixed bg-cover bg-center flex flex-row items-center justify-center gap-10"
      style={{
        backgroundImage: `url(${car_bg})`,
      }}
    >
      <div className="flex flex-col justify-center gap-4 relative z-10 bg-[#1E1E1E] p-10 rounded-[16px] w-fit">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl font-bold uppercase font-[moderniz]">Register an</h2>
          <h2 className="text-white text-6xl font-bold uppercase font-[moderniz]">account</h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <Input
            className="p-4 rounded-lg text-white w-xs"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            className="p-4 rounded-lg text-white w-xs"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="p-4 rounded-lg text-white w-xs"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            className="p-4 rounded-lg text-white w-xs"
            type="password"
            placeholder="Re-enter your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            onClick={handleRegister}
            className="min-w-3xs mt-4 bg-white text-black p-2 rounded-lg hover:bg-[#e2e5de] hover:cursor-pointer"
          >
            Register
          </Button>
        </div>

        {message && (
          <div className="text-center text-sm mt-2 text-white">
            {message}
          </div>
        )}

        <div className="text-white text-sm mt-2 text-center">
          Already have an account?{" "}
          <a href="/login" className="underline hover:text-gray-300">
            Login here
          </a>
        </div>
      </div>

      <img src={title} alt="Olympus Title" className="ml-24 mt-48" />
    </div>
  );
}

export default UserRegistration;
