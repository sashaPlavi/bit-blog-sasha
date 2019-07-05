import { MyAuthor } from '../entities/MyAuthor';

export class AuthorService {


    static fetchAuthors = () => {

        const request = "https://jsonplaceholder.typicode.com/users";

        return fetch(request)
            .then(response => response.json())
            .then(apiAuthors => {
                // console.log('authors: ', apiAuthors);


                const authors = apiAuthors.map(author => new MyAuthor(author))
                // console.log(authors);

                return authors
            })

    }
    static fetchAuthor = (id) => {

        const request = `https://jsonplaceholder.typicode.com/users/${id}`;
        return fetch(request)
            .then(response => response.json())
            .then(apiAuthor => {
                console.log('authors: ', apiAuthor);
                const author = new MyAuthor(apiAuthor)
                return author
            })

    }




}
