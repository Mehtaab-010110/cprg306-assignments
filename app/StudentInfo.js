import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
    return(
        <div>
            <h6>Mehtab Singh</h6>
            <h6>Course Section: CPRG 306 - D</h6>
            <Link href = "https://github.com/Mehtaab-010110/cprg306-assignments">
                <a>Click to see my Github Repository.</a>
            </Link>
        </div>
    );
    };