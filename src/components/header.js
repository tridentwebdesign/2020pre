import React from 'react'
import { Link } from 'gatsby'

export default () => (
    <header>
        <h1>テストサイト</h1>
        <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/about/">About</Link></li>
        </ul>
    </header>
)