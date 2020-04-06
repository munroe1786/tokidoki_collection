class FamilyAPI {
    static getFamilies() {
        return fetch(`${FamilyAPI.base_url}/families`).then(res => res.json())
    }
}

FamilyAPI.base_url = "http://localhost:3000"