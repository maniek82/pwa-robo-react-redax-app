import {shallow} from 'enzyme'
import React from 'react'
import Card from './Card';



describe('Card props', () => {


it('expect to render Card component',()=> {
    expect(shallow(<Card />).length).toEqual(1)

})

it('It includes img tag',()=> {
    const wrapper = shallow(<Card />)
    expect(wrapper.find('img')).toBeDefined();
})

it('It includes class tc',()=> {
    const wrapper = shallow(<Card />)
    expect(wrapper.find('.tc')).toBeDefined();
})
it('It includes paragraph with text',()=> {

    const wrapper = shallow(<Card />)
    expect(wrapper.contains(<p>Age: </p>)).toBeTruthy();
})
it('It includes paragraph with non existing text',()=> {
    expect.assertions(2)

    const wrapper = shallow(<Card />)
    expect(wrapper.contains(<p>Age: </p>)).toBeTruthy();
    expect(wrapper.contains(<h2>Age: </h2>)).toBeFalsy();
})
})

describe('Card rendering', () => {

    it('should render correctly Card', () => {
      const component = shallow(<Card />);
    
      expect(component).toMatchSnapshot();
    });

    it('should render banner text correctly with given strings', () => {
        const strings = ['one', 'two'];
        const component = shallow(<Card list={strings} />);
        expect(component).toMatchSnapshot();
      });
  });