
import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import '../../../../../jest.setup';
import TimesheetWeekDays from '../TimesheetWeekDays';

import timesheetWeekDaysMock from './__mock__/timesheetWeekDays.json';
let wrapper = null;
let timesheetWeekDays = null;
describe('Test TimesheetWeekDays component', () => {
  test('TimesheetWeekDays snapshot renders', () => {
    const component = create(<TimesheetWeekDays timesheetScheduleHours={timesheetWeekDaysMock}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  beforeEach(() => {
    wrapper = mount(<TimesheetWeekDays timesheetScheduleHours={timesheetWeekDaysMock} />);
    timesheetWeekDays = wrapper.find('.timesheet_grid_elements');
  });
  test('TimesheetWeekDays component', () => {
    expect(wrapper.find('h1').at(0).text()).toBe('Timesheet schedule:');
    timesheetWeekDaysMock.forEach(({ day_of_week, available_minutes }, index) => {
      expect(wrapper.find('h1').at(index+1).text()).toBe(day_of_week);
      expect(wrapper.find('h6').at(index).text()).toBe(`${available_minutes} min`);
    })
  });
});