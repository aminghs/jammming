import React, { Component } from 'react'
import './TrackList.css'
import Track from '../Track/Track'

export default class TrackList extends Component {
    render() {
        this.props.tracks.map()
        return (
                <div className="TrackList"> {

                    this.props.tracks.map(track =>{
                        return <Track track={track} 
                        key={track.id} />
                    })
                }
                </div>
        )
    }
}
