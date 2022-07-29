// 请求接口文件
import request from "./api";

const apis = {
  genreList: "/oms/genre/list",
  operationTagList: "/oms/operation-tag/list",
  addOrEidtOpTag: "/oms/operation-tag",
  addOrEidtGeTag: "/oms/genre",
};

// 获取 list
export function fetchGenreList(params) {
  return request({
    url: apis.genreList,
    method: "get",
    params,
  });
}

export function fetchOperationTagList(params) {
  return request({
    url: apis.operationTagList,
    method: "get",
    params,
  });
}

// 新增运营标签
export function addOperationTag(data) {
  return request({
    url: apis.operationTagList,
    method: "post",
    data,
  });
}

// 编辑运营标签
export function editOperationTag(params) {
  return request({
    url: apis.operationTagList,
    method: "put",
    params,
  });
}
