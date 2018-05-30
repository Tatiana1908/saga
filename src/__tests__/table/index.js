import React from 'react';
import { shallow } from 'enzyme';
import TableWithUsers from '../../components/table-with-users/index'
import TableRow from '../../components/table-row/index'

describe('Test table', () => {
  const defaultUser = {
    id: 0,
    firstName: 'user',
    lastName: 'user',
    age: 0,
    visits: 0,
    progress: 0,
    status: 'single',
  };

  it('render component', () => {
    let mockCallBack = jest.fn();
    let users = [defaultUser];
    const wrapper = shallow(<TableWithUsers users={users} getUsers={mockCallBack} />);
    expect(wrapper.find('table').length).toBe(1);
  });

  it('render users', () => {
    let mockCallBack = jest.fn();

    let users = [defaultUser];
    const wrapper = shallow(<TableWithUsers users={users} getUsers={mockCallBack} />);
    expect(wrapper.find(TableRow).length).toBe(1);
  });
});
