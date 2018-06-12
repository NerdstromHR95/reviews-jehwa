import React from 'react';
import { shallow } from 'enzyme';
import ReviewSummary from '../client/components/ReviewSummary';


describe('<ReviewSummary />', () => {
  it('should render an `.star-ratings-css-top`', () => {
    const wrapper = shallow(<ReviewSummary />);
    expect(wrapper.find('.star-ratings-css-top')).to.have.length(1);
  })
})
