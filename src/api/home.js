import request from "@/utils/request";

export function get() {
    return request({
        method: 'get',
        url: '/getAllUser',
    })
}

export function login(value) {
    return request({
        method: 'POST',
        url: '/login',
        data: value
    })
}

export function getCarousel() {
    return request({
        method: 'GET',
        url: '/carousel/show',
    })
}

export function getArticle(current, limit) {
    return request({
        method: 'GET',
        url: `/article/` + current + '/' + limit,
    })
}

export function getArticleById(id) {
    return request({
        method: 'GET',
        url: `/article/` + id,
    })
}


