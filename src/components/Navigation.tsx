import { useState } from "react";

// Hook personalizado para manejar un contador
function useCounter(initialValue: number) {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return { count, increment };
}

// Props para el componente Counter
interface CounterProps {
  label?: string;
  initialValue?: number;
  onChange?: (newValue: number) => void;
}

// Componente reutilizable
export default function Counter({
  label = "Contador",
  initialValue = 0,
  onChange,
}: CounterProps) {
  const { count, increment } = useCounter(initialValue);

  const handleClick = () => {
    increment();
    if (onChange) {
      onChange(count + 1); // Pasamos el nuevo valor al padre si lo necesita
    }
  };

  return (
    <button onClick={handleClick}>
      {label}: {count}
    </button>
  );
}
