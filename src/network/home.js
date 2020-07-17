import { request } from './request'
export function getHomeBanner() {
    return request({
        url: '/vuedemo/banner'
    })
}

//导出一个获取功能视图的 访问
export function getFeature() {
    return request({
        url: "/vuedemo/feature",
        params: {
            show: 1
        }
    })
}
//导出4级分类
//先用3级表的数据代替 goods_all 数据
export function get_jd_category_max(page) {
    // 根据传递过来的页码，取数据 默认取出50条
    return request({
        url: "/vuedemo/get_jd_category_three",
        params: {
            page:page
        }
    })
}