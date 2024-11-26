"use client";
import { useState, useEffect } from "react";
export default function TodoInput({
  setTitleList,
  titleList,
  error,
  setError,
}) {
  useEffect(() => {
    console.log("titleList2", titleList);
  }, [titleList]);
  const [title, setTitle] = useState("");
  function handleSubmit() {
    if (title === "") {
      setError({ message: "Nem lehet üres a mező teeee!", status: true });
      return;
    }
    setError({ message: "", status: false });
    setTitleList([...titleList, title]);
    setTitle("");
  }
  function handleChange(event) {
    setTitle(event.target.value);
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      console.log("Enter");
    }
  }

  return (
    <div>
      <label htmlFor="title" className="pr-2 font-bold text-green-500">
        Cím
      </label>
      <input
        onKeyDown={handleKeyDown}
        name="title"
        type="text"
        className="h-8 px-2"
        value={title}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-2 py-1"
      >
        Hozzáad
      </button>
    </div>
  );
}
