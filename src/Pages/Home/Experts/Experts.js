import React from 'react';
import Expert1 from '../../../images/experts/expert-1.jpg'
import Expert2 from '../../../images/experts/expert-2.jpg'
import Expert3 from '../../../images/experts/expert-3.jpg'
import Expert4 from '../../../images/experts/expert-4.jpg'
import Expert5 from '../../../images/experts/expert-5.jpg'
import Expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Smith', img: Expert1 },
    { id: 2, name: 'Cris Rock', img: Expert2 },
    { id: 3, name: 'Dwayne Smith', img: Expert3 },
    { id: 4, name: 'Messi Vai', img: Expert4 },
    { id: 5, name: 'Ronaldo Bro', img: Expert5 },
    { id: 6, name: 'Cris Gayle', img: Expert6 }
]

const Experts = () => {
    return (
        <div className='container grid'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>

            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;