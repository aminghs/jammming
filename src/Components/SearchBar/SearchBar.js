import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <input placeholder="Enter A Song, Album, or Artist" />
                <button class="SearchButton">SEARCH</button>
            </div>
        )
    }
}
