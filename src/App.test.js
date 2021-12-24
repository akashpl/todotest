import { mount, shallow } from "enzyme";
import React from 'react'; 
//import Adapter from 'enzyme-adapter-react-15'

import TodoForm from "./components/TodoForm";



describe("checking form elements", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< TodoForm />);
    
  });
  it("Form Contains a Inputfield", () => {
    const in1 = wrapper.find("#a1").exists();
    
    
    expect(in1).toEqual(true);
    
    
  });

  it("Form Contains a Button", () => {
    const btn1 = wrapper.find("#a2").exists();
    expect(btn1).toEqual(true);
  });

  it("Checking Button Label", () => {
    const btn1 = wrapper.find("#a2").text();
    expect(btn1).toEqual("Add Todo");
  });
  
    it('It is initially empty',()=>{
      const input= wrapper.find('.inputField');
      expect(input.props().value).toBe('');
    });
          it('form contain a inputfield',()=>{
          expect(wrapper.find('.inputField')).toBeTruthy()
      })
    
          it('Input button has a test',()=>{
          expect(wrapper.find('.submitbutton').text()).toBe('Add Todo')
      })
  
      // it('empty or not',()=>{
      //   const input=wrapper.find('.inputField');
      //   expect(input).toEqual({});
      // })
    });
 

