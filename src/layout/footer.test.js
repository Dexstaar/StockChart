import React from 'react';
import { shallow } from 'enzyme';

import Footer from './footer';

describe('Footer Test', () => {
  let renderedDOM = null;

	it('renders correctly', () => {
		renderedDOM = shallow(<Footer  />);
  });
  
  // it('shows the rendered DOM structure', () => {
  //   console.log(renderedDOM.debug());
  // });
  
});