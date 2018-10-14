import {shallow} from 'enzyme'
import React from 'react'
import MainPage from '../components/MainPage';


// let wrapper;
// beforeEach(()=> {
//     const mockProps = {
//         onRequestRobots: jest.fn(),
//         robots: [],
//         searchField: '',
//         isPending: false
//     }
//     wrapper = shallow(<MainPage {...mockProps}/>)
// })

if('renders MainPage without crashing',()=> {
    const mockProps = {
        onRequestUsers: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
   const wrapper = shallow(<MainPage {...mockProps}/>)
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly 1',()=> {
    const mockProps = {
        onRequestUsers: jest.fn(),
        robots: [{
            id: 2,
            name: 'maniek',
            email:'maniek@gmail.com'
        }],
        searchField: '',
        isPending: false
    }
    const wrapper = shallow(<MainPage {...mockProps}/>)
    expect(wrapper.instance().filterRobots()).toEqual([])
}) 


it('filters robots correctly 2',()=> {
    const mockProps2 = {
        onRequestUsers: jest.fn(),
        robots: [{
            id: 3,
            name:'maniek',
            email: 'maniek@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
   const wrapper2 = shallow(<MainPage {...mockProps2}/>)
    expect(wrapper2.instance().filterRobots()).toEqual([
        {
            id: 3,
            name:'maniek',
            email: 'maniek@gmail.com'
        }
    ])
}) 

it('filters robots correctly 3',()=> {
    const mockProps3 = {
        onRequestUsers: jest.fn(),
        robots: [{
            id: 3,
            name:'maniek',
            email: 'maniek@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = []
   const wrapper3 = shallow(<MainPage {...mockProps3}/>)
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots)
}) 


