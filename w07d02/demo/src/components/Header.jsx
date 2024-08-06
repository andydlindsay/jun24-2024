const Header = (props) => {
  console.log('props', props);

  return (
    <div>
      <h2>Header Component</h2>
      <h2>You are signed in as: {props.username}</h2>
    </div>
  );
};

export default Header;
