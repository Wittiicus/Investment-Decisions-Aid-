import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Navigator() {
  return (
    <div className="Navigator">
        <nav>
            <h2>Home Bank</h2>
            <ul className='navlink'>
                <li>Batch processing</li>
                <li>Home</li>
            </ul>

        </nav>
    </div>
  );
}

export default Navigator;