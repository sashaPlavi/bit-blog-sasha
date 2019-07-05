import React from 'react';
import { Link } from 'react-router-dom';


export class FormPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }


    }



    render() {


        return (
            <>
                <form>
                    <input type="text" />
                    <textarea rows="4" cols="50"></textarea>
                    <input type="button" value='save' />
                    <input type="button" value='cancel' />
                </form>
            </>
        )
    }


}


