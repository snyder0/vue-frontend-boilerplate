import ValueService from './valueService'
import OrganizationService from './organizationService'

const services = {    
    value: new ValueService(),
    organization: new OrganizationService(),
};

export const ServiceFactory = {
    get: (name) => {
        return services[name];
    }
};
