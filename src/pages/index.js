import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'

const IndexPage = () => {
    return (
        <Layout>
            {
                <div className="wrapper">
                    <section className="section">
                        <div className="container">
                            <h2 className="title is-4 notification">WF1（1年生）</h2>
                            <div className="columns">
                                <div className="column is-half">
                                    <h2 className="title is-5">ベクターグラフィックス</h2>
                                    <div className="content">
                                        <ol>
                                            <li><Link to="/vector/post-0">概要</Link></li>
                                            <li><Link to="/">Illustrator起動</Link></li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="column is-half">
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <h2 className="title is-4 notification">WS1（2年生）</h2>
                            <div className="columns">
                                <div className="column is-half">
                                    <h2 className="title is-5">グラフィックデザイン</h2>
                                    <div className="content">
                                        <ol>
                                            <li><Link to="/graphics/post-0">概要</Link></li>
                                            <li><Link to="/graphics/post-1">デザイン腕試し（名刺）</Link></li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="column is-half">

                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            }
        </Layout>
    )
}

export default IndexPage