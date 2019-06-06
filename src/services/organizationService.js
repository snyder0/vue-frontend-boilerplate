import Axios from "./axios"

const resource = "/organizations"
export default class organizationService {
    get() {
        return Axios.get(`${resource}`)
    }

    getOrganization(organizationId) {
        return Axios.get(`${resource}/${organizationId}`)
    }

    createOrganization(organization) {
        return Axios.post(`${resource}`, organization)
    }
}