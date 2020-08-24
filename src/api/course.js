import axios from 'axios'
import { IS_MOCK_LOCAL } from '@/api/config.js'

// 获取课程导航数据
export function getCourseNav () {
   let url="http://localhost:8081/course/nav/"
  return axios.get(url)
}
// 获取课程信息
export function getCourseList (params) {
  let url =  "http://localhost:8081/course/"
  return axios.get(url, {params:params})
}
// 获取课程详情
export function getCourseDetail (id) {
  let url = 'http://localhost:8081/course/detail/'+id;
  return axios.get(url)
}
