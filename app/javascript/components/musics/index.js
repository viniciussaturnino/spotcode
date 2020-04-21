import React, { Fragment, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Columns, Button } from 'react-bulma-components'
import Music from './music'

const PlaySequenceButton = styled(Button)`
    margin-bottom: 30px;
`

const Musics = (props) => {
    const [songs, setSongs] = useState([])
    const [playing, setPlaying] = useState([])
    const AudioRef = useRef()

    useEffect(() =>{
        if(AudioRef.current != null){
            AudioRef.current.pause()
            AudioRef.current.load()
            if(playing.id){
                AudioRef.current.play()
            }
        }
    },[playing])

    useEffect(() => {
        setSongs(props.songs.map((song, key) =>
            <Music song={song} playing={playing.id == song.id} setPlaying={setPlaying} key={key}/>
        ))
    }, [props.songs, playing])

    return(
        <Fragment>
            <Columns className='is-mobile is-centered'>
                <Columns.Column desktop={{size: 2}} mobile={{size: 12}} className='has-text-centered'>
                    <PlaySequenceButton
                    className='is-medium button is-rounded'
                    color='success'>
                        Shuffle Play
                    </PlaySequenceButton>     
                    <audio controls ref={AudioRef}>
                        <source src={playing.file_url}/>
                    </audio>
                </Columns.Column>
            </Columns>
            {songs}
        </Fragment>
    )
}
export default Musics