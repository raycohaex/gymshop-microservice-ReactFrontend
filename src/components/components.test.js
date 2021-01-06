import React from 'react';
import { render } from '@testing-library/react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ErrorComponent from './errorComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('<ErrorComponent />', () => {
    it('Title renders: 404 by default', () => {
        const wrapper = shallow(<ErrorComponent />);
        expect(wrapper.find('#errorTitle').text()).toBe("404 - Not found")
    });

    it('Description renders: It seems like you got a little lost', () => {
        const wrapper = shallow(<ErrorComponent />);
        expect(wrapper.find('#errorDescription').text()).toBe("It seems like you got a little lost.")
    });

    it('Renders a custom title', () => {
        const customTitle = "500 - Server error";
        const wrapper = shallow(<ErrorComponent errorTitle={customTitle}/>);
        expect(wrapper.find('#errorTitle').text()).toBe(customTitle)
    });

    it('Renders a custom description', () => {
        const customDescription = "This says something about the error";
        const wrapper = shallow(<ErrorComponent errorMessage={customDescription}/>);
        expect(wrapper.find('#errorDescription').text()).toBe(customDescription)
    });

    it('Renders a custom description and title', () => {
        const customDescription = "This says something about the error";
        const customTitle = "500 - Server error";
        const wrapper = shallow(<ErrorComponent errorTitle={customTitle} errorMessage={customDescription}/>);
        expect(wrapper.find('#errorTitle').text()).toBe(customTitle);
        expect(wrapper.find('#errorDescription').text()).toBe(customDescription);
    });
});
