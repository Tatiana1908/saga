import React from 'react';
import { shallow } from 'enzyme';
import {SingleUserPage} from '../../components/single-user-page/index'


describe('Test user page', () => {
  SingleUserPage.prototype.componentWillMount = jest.fn();
  const props = [{
    id: 0,
    firstName: 'user',
    lastName: 'user',
    age: 0,
    visits: 0,
    progress: 0,
    status: 'single',
  }]

  it('render component', () => {
    const wrapper = shallow(<SingleUserPage user={props} />);
    expect(wrapper.find('.user').length).toBe(1);
  });

  it('render all values', () => {
    const wrapper = shallow(<SingleUserPage user={props} />);
    expect(wrapper.find('.value').length).toBe(6);
  });
  it('remove btn handler and text', () => {
    const mockCallBack = jest.fn()

    SingleUserPage.prototype.onDeleteUser = mockCallBack;
    const wrapper = shallow(<SingleUserPage user={props} />);
    wrapper.find('.remove-btn').simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
    expect(wrapper.find('.remove-btn').text()).toBe('Del');
  });

});
