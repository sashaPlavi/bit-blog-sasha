import React from 'react';
import { Link } from 'react-router-dom';
import { AuthorService } from '../../services/AuthorService'

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        author: null
    }



    componentDidMount() {
        const id = (this.props.match.params.authorId);
        AuthorService.fetchAuthor(id)
            .then(author => {
                this.setState({ author: author })

                // console.log(this.props.state);
            })


    }

    render() {
        const author = this.state.author

        if (!author) {
            return <h3>Loading author...</h3>
        }

        return (
            <div className="singleAuthor">
                <Link to='/authors'> Back to all authors</Link>

                <div className="authorInfo">
                    <h4>Name Surname: {this.state.author.name}</h4>
                    <p>username:{this.state.author.userName}</p>
                    <p>email:{this.state.author.email}</p>
                    <p>phone: {this.state.author.phone}</p>
                    <img src="https://via.placeholder.com/300" alt="author"></img>
                    <hr></hr>
                </div>

                <div className="authorAdress">
                    <h4>Adress: {this.state.author.city}{this.state.author.street}</h4>
                    <p>street: {this.state.author.street}</p>
                    <p>city:{this.state.author.city}</p>
                    <p>zipcode:{this.state.author.zipcode}</p>
                    <div className="map">
                        <iframe
                            width="300px"
                            height="300px"
                            title={author.street}
                            src={`https://maps.google.com/maps?q=${author.lat},${author.lng}&z=15&output=embed`}
                        />
                        <hr></hr>
                    </div>
                </div>

                <div className="authorCompany">
                    <h4>Company</h4>
                    <p>slogan: {this.state.author.catchPhrase}</p>
                    <hr></hr>
                </div>
            </div>

        )
    }
}

export { SingleAuthor }