import React, { Component } from 'react'
import './movie.css'

export class movie extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.location.state)
        this.state = {
          result: this.props.location.state.result   
        }
    }
    
    render() {
        const {result}  = this.state
        return (
            <div id="info">
                <div id = "tempo">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <center><h1 id="head-start"><strong>{result.Title}</strong></h1></center>
                                <center><p id="year">{result.Year}</p></center>
                            </div>
                            <div class="col-lg-6">
                                <center><strong id="head-first">METASCORE : </strong><p id="sub">Based on the metascore latest data</p><p id="head-over">{result.Metascore}</p></center>
                            </div>
                            <div class="col-lg-6">
                                <center><strong id="head-first">IMDB : </strong><p id="sub">Based on the IMDB latest data</p><p id="head-over">{result.imdbRating}</p></center>
                            </div>
                                
                                
                            </div>
                    </div>
                </div>
               
                <div id="info1">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6  mt-5">
                                <center><img src={result.Poster} id="image"></img>
                                <br></br>
                                <br></br>
                                <h1 id="start"><strong>Box Office</strong></h1>
                                <strong id="first">COUNTRY : </strong><p id="over">{result.Country}</p>
                                <strong id="first">RATED : </strong><p id="over">{result.Rated}</p>
                                <strong id="first">BOXOFFICE : </strong><p id="over">{result.BoxOffice}</p>
                                <strong id="first">PRODUCTION : </strong><p id="over">{result.Production}</p></center>
                            </div>
                            <div class="col-lg-6 mt-5">
                            <center><h1 id="start"><strong>Movie Details and Credits</strong></h1>
                                <strong id="first">TITLE : </strong><p id="over">{result.Title}</p>
                                <strong id="first">YEAR : </strong><p id="over">{result.Year}</p>
                                <strong id="first">RELEASED : </strong><p id="over">{result.Released}</p>
                                <strong id="first">RUNTIME : </strong><p id="over">{result.Runtime}</p>
                                <strong id="first">GENRE : </strong><p id="over">{result.Genre}</p>
                                <strong id="first">DIRECTOR : </strong><p id="over">{result.Director}</p>
                                <strong id="first">WRITERS : </strong><p id="over">{result.Writer}</p>
                                <strong id="first">ACTORS : </strong><p id="over">{result.Actors}</p>
                                <strong id="first">PLOT : </strong><p id="over">{result.Plot}</p>
                                <strong id="first">LANGUAGE : </strong><p id="over">{result.Language}</p>
                                <strong id="first">AWARDS : </strong><p id="over">{result.Awards}</p>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default movie
