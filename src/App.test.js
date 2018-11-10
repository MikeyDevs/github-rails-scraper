import App from "./App";
import mockAxios from "./__mocks__/axios";
import React from 'react';

//SETUP AND CONFIGURE ENZYME
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
configure({ adapter: new Adapter() });



//MAKING SURE THE MAIN APP COMPONENT RENDERS ONCE
describe("<App />", () => {
    it("renders one App component", () => {
        const app = shallow(<App />);
        expect(app).toHaveLength(1);
    })
})

//TESTS TO SEE IF MOCK FUNCTION WORKS
test("calls mockfetch and returns mockdata", async () => {
    mockAxios.get.mockImplementationOnce( () => Promise.resolve({
        data: {
            results: ["data"]
        }
    }) )
})

//TEST TO FETCH API WITH MOCK FUNCTION
test("fetch articles on setLabels()", async () => {
    const event = {target: "label"}
    const app = shallow(<App />);
    const instance = await app.instance().setLabels( event )

    expect(mockAxios.get).toHaveBeenCalled();
  });
