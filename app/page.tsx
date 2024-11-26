"use client";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import TodoInput from "@/app/components/TodoInput";
export default function Home() {
  const [titleList, setTitleList] = useState([]);
  const [error, setError] = useState({ message: "", status: false });

  function handleDelete(index) {
    setTitleList(titleList.filter((_, i) => i !== index));
  }
  useEffect(() => {
    console.log("titleList", titleList);
  }, [titleList]);

  return (
    <main className="flex justify-center items-center bg-green-800 h-[100vh]">
      <ul>
        {titleList.map((cím, i) => (
          <div key={i}>
            <li className="text-2xl text-blue-600">{cím}</li>
            <button onClick={() => handleDelete(i)}>Törlés</button>
          </div>
        ))}
      </ul>
      <TodoInput
        setTitleList={setTitleList}
        titleList={titleList}
        error={error}
        setError={setError}
      />
      {error.status && (
        <p className="font-bold text-xl text-error font-error">
          {error.message}
        </p>
      )}
    </main>
  );
}
