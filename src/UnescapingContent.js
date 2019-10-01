import React from 'react';
import ReactDOM from 'react-dom';

function DangerContainer(props) {
  return <p dangerouslySetInnerHTML={{ __html: props.dangeroous }} />;
}

ReactDOM.render(<DangerContainer />, document.getElementById('root'));
