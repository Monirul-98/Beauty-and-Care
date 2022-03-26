import React from "react";

const QueAns = () => {
  return (
    <div>
      <h3>How React Works?</h3>
      <p>
        React is a JavaScript Library.It work in unidirectional data flow.It
        creates user interfaces by using declarative code.React uses a virtual
        dom.When it needs to read and write,it will use the virtual dom.React is
        based on the concept of reuseable components.React uses diff algorithm
        to compare the two root elements.
      </p>
      <h3>How useState works?</h3>
      <p>
        useState() is a hook.It helps us perform side effects in function
        components.It helps us to change states.We pass on a initial state and
        then using setState function we can change the state.A state can be of
        any type.It returns current state and a which updates it.
      </p>
    </div>
  );
};

export default QueAns;
