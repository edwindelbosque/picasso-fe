import { getFiveColors } from './apiCalls'

describe('gitFiveColors', () => {
    const mockResponse = {"result":[[214,78,69],[247,242,163],[201,216,147],[57,141,112],[62,80,64]]}

    it('should call fetch with the correct URL', async () => {
        // setup
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            });
            });

            // Execution
            getFiveColors()
        
            // Expectation
            expect(window.fetch).toHaveBeenCalledWith("http://colormind.io/api/");
    })

    it("Should return an object with an array of five colors arrays", () => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
        getFiveColors().then(movies => expect(movies).toEqual(mockResponse));
      });

      it("should return catch error if promise rejects", () => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.reject({
            ok: false
          });
        });
        getFiveColors().catch(e => expect(e).toMatch("error"));
      });

})