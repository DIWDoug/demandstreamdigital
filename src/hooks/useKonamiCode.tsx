import { useEffect, useCallback } from "react";
import confetti from "canvas-confetti";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export const useKonamiCode = () => {
  const fireConfetti = useCallback(() => {
    // Fire confetti from both sides
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Big burst in the center
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
    });
  }, []);

  useEffect(() => {
    let inputSequence: string[] = [];

    const handleKeyDown = (event: KeyboardEvent) => {
      inputSequence.push(event.code);

      // Keep only the last N keys where N is the length of the Konami code
      if (inputSequence.length > KONAMI_CODE.length) {
        inputSequence = inputSequence.slice(-KONAMI_CODE.length);
      }

      // Check if the sequence matches
      if (inputSequence.join(",") === KONAMI_CODE.join(",")) {
        fireConfetti();
        inputSequence = []; // Reset after successful entry
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fireConfetti]);
};

export default useKonamiCode;
