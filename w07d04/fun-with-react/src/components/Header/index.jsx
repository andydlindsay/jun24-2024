/**
 * props:
 *    numTodos: 6
 *    numCompletes: 5
 */

import './index.scss';

// const props = {
//   numTodos: 6,
//   numCompletes: 6,
// };

const Header = (props) => {
  return (
    <div className="Header">
      <h2>Todo List App (not so smart)</h2>
      <h2
        className={props.numCompletes === props.numTodos ? 'complete' : ''}
      >{props.numCompletes}/{props.numTodos}</h2>
    </div>
  );
};

export default Header;
