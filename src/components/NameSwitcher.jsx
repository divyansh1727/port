import { useState, useEffect } from "react";
import "@fontsource/tiro-devanagari-hindi"; // Hindi font

export default function Name() {
  const names = ["Divyansh", "दिव्यांश"]; // English + Hindi
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % names.length);
    }, 3000); // Switch every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`text-4xl font-bold transition duration-500 ${
        index === 1 ? "font-[Tiro_Devanagari_Hindi] text-cyan-400" : "text-purple-400"
      }`}
    >
      {names[index]}
    </h1>
  );
}
