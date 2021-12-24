import { mount, shallow } from "enzyme";
import TodoList from "../TodoList";

describe('The input field',()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper=mount(<TodoList />)
    });


     it('render heading',()=>{
    const heading=<h2>todo list</h2>
    expect(wrapper.contains(heading)).toEqual(true);
  })
});