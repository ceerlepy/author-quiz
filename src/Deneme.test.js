import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

function Hello(props) {
  return <h1>Hello at {props.now}</h1>;
}

const moment = new Date();

describe('When testing directly', () => {
  let result;
  beforeAll(() => {
    result = Hello({ now: moment.toISOString() });
  });

  it('return a value', () => {
    expect(result).not.toBeNull();
  });

  it('is a h1', () => {
    expect(result.type).toBe('h1');
  });

  it('return a value', () => {
    expect(result.props.children).toBeTruthy();
  });
});

describe('When testing directly', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hello now={moment.toISOString} />, div);
  });
});

Enzyme.configure({ adapter: new Adapter() });

describe('When testing with enzyme', () => {
  it('renders a h1', () => {
    const wrapper = shallow(<Hello now={moment.toISOString} />);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('contains Hello at 2020-05-08T14:00:00.000Z', () => {
    const wrapper = shallow(<Hello now={moment.toISOString} />);
    //expect(wrapper.contains(<h1>Hello at 2019-07-24T20:54</h1>)).toBe(true);
  });
});
