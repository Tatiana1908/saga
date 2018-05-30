import React from 'react';
import { shallow } from 'enzyme';


import AddUserBtn from '../../components/button';


describe('Test Button component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AddUserBtn />);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should call function on button click', () => {
    const mockCallBack = jest.fn()
    const wrapper = shallow(<AddUserBtn openModal={mockCallBack} />);
    wrapper.find('button').simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
});
