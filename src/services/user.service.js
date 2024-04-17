import { CONSTANT } from "../common/constant.js";
import httpCommon from "../utils/http-common.js";

const userService = {
    // newsDetails(body) {
    //     return httpCommon.get(CONSTANT.API_CONSTANT.NEWS_DETAILS, body);
    // },
    getAllHisab() {
        return httpCommon.get(CONSTANT.API_CONSTANT.GET_ALL_HISAB);
    },
    
};

export default userService;