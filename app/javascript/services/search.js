import Api from './api'

const SearchService = {
    inde: (query) => Api.get(`/search?query=${query}`)
}
export default SearchService