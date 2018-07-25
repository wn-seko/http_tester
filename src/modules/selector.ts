import { RootState } from './index'

export const requestSelector = {
  getResponse: (state: RootState) => state.request.response,
  getLoading: (state: RootState) => state.request.loading,
  getLevel: (state: RootState) => state.request.level
}
