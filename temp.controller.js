// temp.controller.js

import { status } from '../../config/response.status.js';
import { getTempData } from '../services/temp.service';
import { response } from '../../config/response.js';

/*export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()));
};*/

// temp.controller.js

export const tempException = (req, res, next) => {
    console.log("/temp/exception/"+req.params.flag);
    return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
}

