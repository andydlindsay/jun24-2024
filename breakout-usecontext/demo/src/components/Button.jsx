import { useCountContext } from '../components/CountProvider';

const Button = () => {
  const { increment } = useCountContext()

  return (
    <div>
      <button onClick={increment}>Click me!</button>
    </div>
  );
};

export default Button;
