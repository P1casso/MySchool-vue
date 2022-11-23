import request from "@/utils/request";

export function getArticleById(id) {
    return request({
        method: 'get',
        url: `/article/` + id,
    })
}
