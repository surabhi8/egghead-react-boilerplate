import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import App from './App';


describe("App Component",()=>{
  it("Runs and passes",()=>{
    render(<App/>)
  })
})