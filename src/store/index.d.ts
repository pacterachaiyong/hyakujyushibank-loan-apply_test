export interface IBasePageTableModule {
  current_page: number
  page_size: number
  total: number
  table_columns: any[]
  table_rows: any[]
  table_loading: boolean
  current_row?: any
  selected_rows: any[]
  [propName: string]: any
}
