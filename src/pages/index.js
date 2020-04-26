import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import newsStyles from '../styles/news.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            {
                <div className="wrapper">
                    <section className="section">
                        <div className="container">
                            <h2 className="title is-3">WF1（1年生）</h2>
                            <div className="columns">
                                <div className="column is-half">
                                    <h2 className="title is-4">ベクターグラフィックス</h2>
                                    <div className="content">
                                        <ol>
                                            <li><Link to="/vector/000">概要</Link></li>
                                            <li><Link to="/vector/001">Illustrator起動</Link></li>
                                            <li><Link to="/about/">About</Link></li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="column is-half">
                                    <table className={newsStyles.list}>
                                        <tr>
                                            <th>2019.10.10</th>
                                            <td>新しいお知らせ</td>
                                        </tr>
                                        <tr>
                                            <th>2019.10.10</th>
                                            <td>古いお知らせ</td>
                                        </tr>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <h2 className="title is-3">WS1（2年生）</h2>
                            <div className="columns">
                                <div className="column is-half">
                                    <h2 className="title is-4">グラフィックデザイン</h2>
                                    <div className="content">
                                        <ol>
                                            <li><Link to="/graphics/page-zero/000">概要</Link></li>
                                            <li><Link to="/graphics/001">デザイン腕試し（名刺）</Link></li>
                                            <li><Link to="/graphics/002">About</Link></li>
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