import React from 'react'
import { Link } from 'gatsby'

export default () => (
    <header className="hero is-warning">
        <div className="hero-body">
            <div className="container">
                <h1 className="title is-2 is-spaced"><Link to="/">Webデザイン学科 授業資料</Link></h1>
                <h2 className="subtitle"><span className="period"><Link to="/">2020前期</Link></span><span className="period"><Link to="https://2020late.hideok.org/">2020後期</Link></span></h2>
            </div>
        </div>
    </header>
)