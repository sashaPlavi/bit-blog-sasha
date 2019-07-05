import { MyPost } from '../entities/MyPost';


class PostServices {

    fetchServices = () => {

        const request = "https://jsonplaceholder.typicode.com/posts";

        return fetch(request)
            .then(response => response.json())
            .then(posts => {



                const myPosts = posts.map(post => new MyPost(post))



                return myPosts
            })
    }

    fetchSinglePost = (postid) => {


        const request = `https://jsonplaceholder.typicode.com/posts/${postid}`;

        return fetch(request)
            .then(response => response.json())
            .then(Apipost => {



                const myPost = new MyPost(Apipost)
                // console.log(myPost);


                return myPost
            })
    }



    fetchAuthorPost = (id) => {


        const request = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
        return fetch(request)
            .then(response => response.json())
            .then(apiAuthorPost => {
                console.log('posts: ', apiAuthorPost);
                const authorPost = apiAuthorPost.map(post => new MyPost(post))
                return authorPost
            })

    }

}
export const postServices = new PostServices