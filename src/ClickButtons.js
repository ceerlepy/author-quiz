import React from 'react';
import ConditionalDisplay from './ValidatedChildElement';

function ClikcyButtons({ numberOfButtons, onSelection }) {
  const makeButton = v => (
    <ConditionalDisplay isVisible={v % 2 === 0}>
      <button key={v} id={v} onClick={event => onSelection(event.target.id)}>
        {v}
      </button>
    </ConditionalDisplay>
  );

  return <div>{numberRange(1, numberOfButtons + 1).map(makeButton)}</div>;
}

function numberRange(start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}

export default ClikcyButtons;
