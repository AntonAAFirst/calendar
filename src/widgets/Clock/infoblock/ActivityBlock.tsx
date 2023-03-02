import { useEffect, useRef, useState } from "react";

export default function ActivityBlock() {
  const ageString = useRef<any>();

  const [state, setState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (new Date().getSeconds() % 5 === 0) {
        setState(new Date().getSeconds());
      }
    }, 1000);
  });

  return (
    <div ref={ageString} className="activity-string">
      {state}
    </div>
  );
}
