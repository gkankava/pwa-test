import { bareApiCall, apiCall } from "api";

export function getDataByKeword(props) {
  return apiCall.get(`/mobile/${props.refer}`, {
    params: props.params,
  });
}

export function getNextPage(url) {
  return bareApiCall.get(url);
}
