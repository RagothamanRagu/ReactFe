import React from 'react'; 
import Accordion from 'react-bootstrap/Accordion';

function Accord() {
  return (
    <Accord defaultActiveKey="0">
      <Accord.Item eventKey="0">
        <Accord.Header>Accordion Item #1</Accord.Header>
        <Accord.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accord.Body>
      </Accord.Item>
      <Accord.Item eventKey="1">
        <Accord.Header>Accordion Item #2</Accord.Header>
        <Accord.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accord.Body>
      </Accord.Item>
    </Accord>
  );
}

export default Accord;















