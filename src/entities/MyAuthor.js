
export class MyAuthor {
    constructor(apiAuthor) {
        this.id = apiAuthor.id;
        this.name = apiAuthor.name;
        this.userName = apiAuthor.userName;
        this.email = apiAuthor.email;
        this.phone = apiAuthor.phone;
        this.website = apiAuthor.website;
        this.city = apiAuthor.address.city;
        this.street = apiAuthor.address.street;
        this.zipcode = apiAuthor.address.zipcode;
        this.catchPhrase = apiAuthor.company.catchPhrase;

    }

}

