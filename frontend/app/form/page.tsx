"use client";

import React from "react";
import { createUser } from "../api/user";




export default function FormPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser({ name, email });
    setSuccess(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-center mb-16">Form Demo</h1>
      {success ? (
        <div className="text-center">
          <p>Thanks for submitting, {name} ({email})!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} >
          <label className="block mb-4">
            <span className="font-bold">Name</span>
            <input
              className="block w-full p-4 bg-slate-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            <span className="font-bold">Email</span>
            <input
              className="block w-full p-4 bg-slate-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button className="p-4 bg-green-400 rounded">Submit</button>
        </form>
      )}
    </main>
  );
}



