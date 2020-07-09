import { _axios as http } from '@/plugins/axios'
import urls from '@/libs/urls'

export function apply114LoanTmp(params) {
  // return http.post(`/mock/local-hyakujyushibank-server-api/api/bank_account_tmp/loan`, params)
  return http.post(`/mock/api/bank_account_tmp/loan`, params)
}

export function apply114Loan(params) {
  // return http.post(`${urls.dev}/api/bank_account/loan`, params)
  // return http.post(`/mock/local-hyakujyushibank-server-api/api/bank_account/loan`, params)
  return http.post(`/mock/api/bank_account/loan`, params)
}

export function apply114LoanGetAddress(params) {
  return http.get('/map/search/zip/V1/zipCodeSearch', params)
}

export function apply114LoanGetHopeStoreName(params) {
  // return http.post(`/mock/local-hyakujyushibank-server-api/api/applyStore/search`, params)
  return http.post(`/mock/api/applyStore/search`, params)
  // return http.post(`/storeName/api/applyStore/search`, params)
}

export function apply114LoanGetDetail(params) {
  // return http.post(`/mock/local-hyakujyushibank-server-api/api/bank_account_tmp/show`, params)
  return http.post(`/mock/api/bank_account_tmp/show`, params)
}
