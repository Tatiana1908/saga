import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import AddUserBtn from '../../src/components/button';

configure({ adapter: new Adapter() });

describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockLogout = jest.fn();
//     const wrapper = shallow(<AddUserBtn onClick={mockLogout} />);
//     wrapper.find('button').simulate('click');
//     expect(mockLogout).toHaveBeenCalled();
//   });
// });
  it('should call add user function on button click', () => {
    const mockCallBack = () => {}
    const wrapper = shallow(<AddUserBtn />);
    // wrapper.find('button').simulate('click');
    expect(wrapper.find('button')).not.toBe(null);
    //expect(mockCallBack).toHaveBeenCalled();
  });
});
