import React from 'react'

function Suggestion() {
    return (
        <div id="suggestions" className="row no-gutter" style={{marginBottom:"20px"}}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-gutter">
                <h3 style={{textAlign:"center"}}>People are Searching for...</h3>
                <div className='suggestions touchswipe'>
                    <a href='/'>floor lamps</a>
                    <a href='/'>wall sconces</a>
                    <a href='/'>celest</a>
                    <a href='/'>visual comfort</a>
                    <a href='/'>uttermost decor</a>
                    <a href='/'>linear chandelier</a>
                    <a href='/'>table lamps</a>
                    <a href='/'>wall art</a>
                </div>
            </div>
        </div>
    )
}

export default Suggestion
