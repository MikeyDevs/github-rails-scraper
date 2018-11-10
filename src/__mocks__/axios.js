
//CREATING A MOCK FUNCTION TO SIMULATE THE AXIOS GET CALL IN OUR SETLABELS METHOD
export default {
    get: jest.fn( () => {
        Promise.resolve({})
    } )
}