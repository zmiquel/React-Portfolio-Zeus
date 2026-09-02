import { useEffect, useState } from "react";
import { data } from "../collections/tech.jsx";
import LogoGroup from "./LogoGroup.jsx";

const LogoRotating = () => {
  const [logos, setLogos] = useState(data);

  useEffect(() => {
    const timeouts = [];
    const sleep = (ms) =>
      new Promise((res) => timeouts.push(setTimeout(res, ms)));

    // Stagger each column so the three groups don't flip in lockstep.
    const rotateLogos = async () => {
      for (let i = 0; i < data.length; i++) {
        await sleep(1400 * i);
        setLogos((prev) =>
          prev.map((group, idx) => {
            if (idx !== i) return group;
            // Rotate the position classes down the column, copying as we go
            // so we never mutate the module-level `data` array.
            const [a, b, c] = group;
            return [
              [a[0], a[1], b[2]],
              [b[0], b[1], c[2]],
              [c[0], c[1], a[2]],
            ];
          })
        );
      }
    };

    rotateLogos();
    const intervalId = setInterval(rotateLogos, 5600);

    return () => {
      clearInterval(intervalId);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="bg-[#0f0f0f] pt-24 pb-12">
      <h2 className="text-center text-4xl sm:text-5xl text-slate-200 font-bold">
        What I Like
      </h2>
      <div className="logos min-h-[40vh] flex flex-wrap justify-around items-center text-3xl overflow-hidden">
        {logos.map((group, index) => (
          <LogoGroup key={index} logos={group} />
        ))}
      </div>
    </div>
  );
};

export default LogoRotating;
