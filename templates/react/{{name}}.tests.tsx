import React from 'react';
import { mount } from 'enzyme';

import {{name}} from './index';

describe('[component] {{name}}', () => {
  test('[Snapshot] {{name}}', () => {
    const component = mount(
      <{{name}}>
        Steve fish muskellunge swallower triplefin blenny horsefish wolffish.
      </{{name}}>
    );

    expect(component).toMatchSnapshot();
  });
});
