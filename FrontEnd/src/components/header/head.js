import React, { Component } from 'react'
import './head.css'

export class head extends Component {
    render() {
        return (
            <div>
                <div id = "totol">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12  mt-5">
                            <i class="fas fa-video fa-4x" id="awe"></i><h1 id="title">Moviezone</h1>
                            </div>
                            <div class="col-lg-12 mb-5 mt-2">
                                <p id="sub">A BEST WEBSITE TO RATE AND REVIEW MOVIES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default head
