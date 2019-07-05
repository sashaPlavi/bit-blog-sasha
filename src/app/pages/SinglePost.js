import React from 'react';
import { Link } from 'react-router-dom';
import { postServices } from '../../services/PostServices'
import { AuthorService } from '../../services/AuthorService'


export class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: [],
            author: null,
            authorsPosts: []


        }
    }

    componentDidMount() {
        this.getPost()
    }

    getPost() {
        const singlepostid = this.props.match.params.postId

        postServices.fetchSinglePost(singlepostid)
            .then(post => {
                this.setState({ post: post })
                this.getAuthor(post.userId)
            })
    }

    getAuthor(id) {
        AuthorService.fetchAuthor(id)
            .then(author => {
                this.setState({ author: author })
                this.getAuthorPost(author.id)
                // console.log(author);
            })
    }

    getAuthorPost(userId) {
        postServices.fetchAuthorPost(userId)
            .then(authorPosts => {
                const authorP = authorPosts.filter(post => post.id !== this.state.post.id)
                console.log(authorP);


                this.setState({ authorsPost: authorP })

            })
    }

    componentDidUpdate(prevProps) {
        // only update chart if the data has changed
        // console.log(prevProps);
        //console.log(this.props);
        if (prevProps !== this.props) {

            this.getPost()
        }
    }

    render() {

        const AuthorPost = this.state.authorsPost || ''
        // console.log(AuthorPost);

        const authorName = this.state.author;
        // console.log(authorName);

        if (!authorName || !AuthorPost) {
            return <h3>Loading author...</h3>
        }


        return (
            <div className="postBlock">
                <h4> {this.state.post.title}</h4>
                <h3><Link to={`/authors/${authorName.id}`}>{authorName.name} </Link></h3>
                <p>{this.state.post.body} </p>
                <hr></hr>
                <h2>more posts  from this author</h2>
                <div>{this.state.authorsPost.slice(1, 4).map(post => {
                    return (
                        <p><Link to={`/posts/${post.id}`}>{post.title}</Link></p>
                    )
                })}
                </div>
            </div>

        )


    }
}
