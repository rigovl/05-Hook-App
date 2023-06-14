import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-axamples";


export const Layout = () => {
    
    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    const {name, species} =  !!data && data;

    return (

        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

        {
            isLoading ? <LoadingQuote/> : <Quote name={name} species={species}/>
        }
            
            <button className="btn btn-primary" 
                onClick={() => increment()}
                disabled={isLoading}>Next Quote
            </button>
        </>
    )
}
