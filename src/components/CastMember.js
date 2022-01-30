import React from 'react';



function CastMember( castMember ) {

    return (
        <div className='castMember'>
            <p>"{castMember.character}"</p>
            <p>{castMember.name}</p>
        </div>
    )
}

export default CastMember;