import {shallow} from 'enzyme'
import React from 'react'
import CounterButton from './CounterButton';



describe('CounterButton snapshot', () => {


it('expect to render CounterButton component',()=> {
   const mockColor = 'red'
    expect(shallow(<CounterButton color ={mockColor}/>)).toMatchSnapshot()

})

})


describe('CounterButton counter', () => {


    it('correctly increments the counter',()=> {
        expect.assertions(2)
       const mockColor = 'red'
        const wrapper = shallow(<CounterButton color={mockColor} />)

        wrapper.find('[id="counter"]').simulate('click');
        wrapper.find('[id="counter"]').simulate('keypress'); 
        expect(wrapper.state()).toEqual({count:1});
        expect(wrapper.props().color).toEqual('red')
    
    })
    
    }) 