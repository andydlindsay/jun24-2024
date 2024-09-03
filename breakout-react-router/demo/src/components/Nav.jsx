import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <Link to="/home">Home Page </Link><br/>
      <Link to="/about">About Page </Link><br/>
      <Link to="/products">Products Page </Link>
    </div>
  );
};

export default Nav;
