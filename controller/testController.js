import {Test} from "../models/index";

export const createTest = async (request, h) => {
    let test = await Test.create({
      key: request.payload.key,
      value: request.payload.value
    });

    if(test){
        return h.response(test).code(201)
    }else {
        return h.response().code(400)
    };

};

export const getById = async (request, h) => {
    let value = await Test.findOne({
      where: { id: request.params.id }
    });

    if(value){
        return h.response(value).code(201)
    }else {
        return h.response().code(400)
    };
};

export const getByKey = async (request, h) => {
    let value = await Test.findAll({
      where: { key: request.params.key }
    });

    if(value){
        return h.response(value).code(201)
    }else {
        return h.response().code(400)
    };
};

export default {
    createTest,
    getById,
    getByKey
};


