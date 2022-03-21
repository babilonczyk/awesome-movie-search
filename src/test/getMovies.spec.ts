import getMovies from "../api/getMovies";
import _ from "lodash";

export default describe('getMovies api request',  () => {

  test('returns 200 status code and valid response', async () => {
    await getMovies('test').then( result => { 
      expect(result["status"]).toBe(200);
      expect(_.isArray(result["data"]["results"])).toBe(true);
      expect(result["data"]["results"].length).toBe(20);
    })
  }); 

}); 
