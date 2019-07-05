import React from 'react';
import { Link } from 'react-router-dom';
import { postServices } from '../../services/PostServices';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postServices.fetchServices()
            .then(posts => {
                this.setState({ posts: posts });
            })
    }

    render() {
        return (
            <div className="posts">

                <h3>POSTS</h3>
                <div className="divider"></div>
                {this.state.posts.map(post => (
                    <div className="section">
                        <h5><Link to={`/posts/${post.id}`}>{post.title} </Link></h5>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>

        )
    }
}


export { Home }


