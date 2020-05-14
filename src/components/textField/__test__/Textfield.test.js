
import React from 'react';
import { create } from 'react-test-renderer';
import TextField from '../TextField';


describe('Test TextField component', () => {
  test('TextField snapshot renders', () => {
    const component = create(<TextField />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('TextField component', () => {
    const component = create(
      <TextField />
    ).root;
    const emptyContent = component.findByType('input');
    expect(emptyContent.type).toBe('input');
  });
});