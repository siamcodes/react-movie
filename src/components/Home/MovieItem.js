import React, { Component } from 'react'

export class MovieItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div>
                <table key={this.props.movie.id} style={{textAlign:'left'}}>
                    <tbody>
                        <tr>
                            <td><img src={this.props.movie.poster_src} /></td>
                            <td>
                                <strong>{this.props.movie.title}</strong>
                                <p>{this.props.movie.overview}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MovieItem