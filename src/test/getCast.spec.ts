import getCast from "../api/getCast";
import _ from "lodash";

export default describe('getCast api request',  () => {

  test('returns 200 status code and valid response', async () => {
    await getCast(342).then( result => {
      expect(result["status"]).toBe(200); 
      expect(_.isArray(result["data"]["cast"])).toBe(true);
      expect(result["data"]["id"]).toBe(342);
    })
  }); 
}); 