"use client";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch(
            "https://my-first-worker.nagasunilnasari.workers.dev/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            }
        );

        const text = await res.text();

        alert(text);
    }
      

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md space-y-4 w-80"
            >
                <h2 className="text-xl font-bold text-center">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 w-full rounded"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 w-full rounded"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white w-full p-2 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
