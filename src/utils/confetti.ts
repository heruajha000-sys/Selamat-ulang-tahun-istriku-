import confetti from 'canvas-confetti';

export const triggerFestiveConfetti = () => {
  // Burst 1: Center burst with pink, gold, and white
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#F472B6', '#FBBF24', '#FFFFFF', '#FB7185', '#FDE047'],
  });

  // Burst 2: Left cannon
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#F43F5E', '#F59E0B', '#FDF2F8', '#FCD34D'],
    });
  }, 250);

  // Burst 3: Right cannon
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#EC4899', '#EAB308', '#FFFFFF', '#FDA4AF'],
    });
  }, 450);
};

export const triggerStarBurst = (x = 0.5, y = 0.5) => {
  confetti({
    particleCount: 40,
    spread: 60,
    origin: { x, y },
    shapes: ['star', 'circle'],
    colors: ['#FBBF24', '#F472B6', '#FFFFFF', '#FEF08A'],
    scalar: 1.2,
  });
};
