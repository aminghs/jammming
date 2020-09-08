import React, { Component } from 'react'
import './SearchResults.css'

export default class SearchResults extends Component {
    render() {
        return (
            <div>
                <div className="SearchResults">
                <h2>Results</h2>
                    <TrackList />
                </div>
            </div>
        )
    }
}
