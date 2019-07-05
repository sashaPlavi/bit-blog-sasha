import React from 'react';
import { Link } from 'react-router-dom';
import { AuthorService } from '../../services/AuthorService';
import { } from '../pages/SingleAuthor';

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }

    }

    componentDidMount() {
        AuthorService.fetchAuthors()
            .then(authors => {
                this.setState({ authors: authors })
                console.log(this.props);

            })
    }

    render() {
        const au = this.state.authors
        console.log(au);

        const numOfAuthors = this.state.authors.length || ''

        return (

            <div className="authors" >
                <h3>Authors <span>{numOfAuthors}</span></h3>
                {this.state.authors.map(author => (
                    <div className='authorInfo'>
                        <h4><Link to={`/authors/${author.id}`}>{author.name}</Link></h4>
                        <p>{author.email}</p>
                        <hr></hr>
                    </div>
                ))}
            </div>

        )
    }
}



export { Authors }


