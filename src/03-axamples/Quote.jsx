import PropTypes from 'prop-types'
import { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({species, name}) => {

    const pRef = useRef();
    const [boxZise, setBoxZise] = useState({witdh: 0, height: 0});
    
    useLayoutEffect(() => {
        const {height, witdh} = pRef.current.getBoundingClientRect();
        setBoxZise({height, witdh})

    }, [name]);

    return (
        <>
            <blockquote className="blockquote text-end" style={{display: 'flex'}}>
                <p ref={pRef} className="mb-1">{species}</p>
                <footer className="blockquote-footer">{name}</footer>
            </blockquote>

            <code>{JSON.stringify(boxZise)}</code>
        </>
    )
}

Quote.propTypes = {
    species: PropTypes.string,
    name:  PropTypes.string,
}