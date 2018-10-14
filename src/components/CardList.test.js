import {shallow} from 'enzyme'
import React from 'react'
import CardList from './CardList';



describe('CardList snapshot', () => {


it('expect to render CardList component',()=> {
    const mockRobots = [
        {
            key:1,
            name: 'John',
            email: 'maniek@gmail.com',
            city:'leicester',
            age:5,
            photo: 'photo',  
            phone: 'phone' 
        }
    ]
    expect(shallow(<CardList users={mockRobots}/>)).toMatchSnapshot()

})

})
