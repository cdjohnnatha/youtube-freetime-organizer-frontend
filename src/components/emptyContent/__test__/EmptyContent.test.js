
import React from 'react';
import { create } from 'react-test-renderer';
import EmptyContent from '../EmptyContent';


describe('Test EmptyContent component', () => {
  test('EmptyContent snapshot renders', () => {
    const component = create(<EmptyContent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('EmptyContent component', () => {
    const component = create(
      <EmptyContent />
    ).root;
    const emptyContent = component.findByType('div');
    expect(component.props.message).toBe('It was not found any content for this resource');
    expect(emptyContent.type).toBe('div');
  });
});