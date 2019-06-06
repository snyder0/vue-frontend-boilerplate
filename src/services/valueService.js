import Axios from "./axios"

const resource = "/value"
export default class valueService {
    get() {
        return Axios.get(`${resource}`)
    }

    getValue(valueId) {
        return Axios.get(`${resource}/${valueId}`)
    }

    postValues(values) {
        return Axios.post(`${resource}`, values)
    }
}