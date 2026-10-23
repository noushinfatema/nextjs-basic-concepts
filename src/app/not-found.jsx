import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h3>Opps... something went wrong</h3>
            <Link href={'/'} className='btn'>Return to homepage </Link>
        </div>
    );
};

export default NotFound;