import {useContext} from 'react';

import {useCountContext} from '../components/CountProvider';
import UserContext from '../contexts/UserContext';

const Display = () => {
  const { count } = useCountContext();
  const userContext = useContext(UserContext);

  return (
    <div>
      <h2>Count is { count }</h2>
    </div>
  );
};

export default Display;
