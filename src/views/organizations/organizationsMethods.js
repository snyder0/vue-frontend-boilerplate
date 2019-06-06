import { ServiceFactory } from '../../services/serviceFactory'
const OrganizationsService = ServiceFactory.get('organization')


get = () => {
    return OrganizationsService.get()
}

getOrganization = (organizationId) => {
    return OrganizationsService.getOrganization(organizationId)
}

createOrganization = (organizations) => {
    OrganizationsService.createOrganization(organizations)
}