import { getShoppingCart } from "../utilities/fakedb"

const companyLoader = async() =>{
    const loadedCompanies = await fetch('company.json');
    const companies = await loadedCompanies.json() ;
    const storeCompany = getShoppingCart();
    const savedCompany = [];
    for(const id in storeCompany){
        const addedCompany = companies.find(company => company.id === id)
        if(addedCompany){
            const quantity = storeCompany[id]
            addedCompany.quantity = quantity;
            savedCompany.push(addedCompany)
        }
    }
    return savedCompany;
}
export default companyLoader;