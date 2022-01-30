import React from 'react';
import CastMember from '../components/CastMember';



function FullCast( castData ) {

    return (
        <div className='fullCast'>
            {castData.cast.map(castMember =>
                <CastMember castMember={castMember} key={castMember.id}/>
            )}
        </div>
    )
}

export default FullCast;