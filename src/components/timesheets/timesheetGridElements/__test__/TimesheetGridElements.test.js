
import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import '../../../../../jest.setup';
import TimesheetGridElements from '../TimesheetGridElements';

import titleContentMock from './__mock__/titleContent.mock.json';

let wrapper = null;
describe('Test TimesheetGridElements component', () => {
  test('TimesheetGridElements snapshot renders', () => {
    const component = create(<TimesheetGridElements content={titleContentMock.content} title={titleContentMock.title} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('TimesheetGridElements component', () => {
    wrapper = mount(<TimesheetGridElements content={titleContentMock.content} title={titleContentMock.title} />);
    expect(wrapper.find('h1').text()).toBe(titleContentMock.title)
    expect(wrapper.find('h6').text()).toBe(titleContentMock.content)
  });
});