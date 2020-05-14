
import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../Button';

const onSingleLetterClickHandler = () => { };

describe('Test Button component', () => {
  test('Button snapshot renders', () => {
    const component = create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Button component', () => {
    const component = create(
      <Button onSingleLetterClickHandler={onSingleLetterClickHandler} />
    ).root;
    const button = component.findByType('button');

    expect(button.type).toBe('button');
  });
});