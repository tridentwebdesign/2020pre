import React from "react"
import Header from '../components/header'
import newsStyles from '../styles/news.module.scss'

const IndexPage = () => {
    return (
        <div className="container">
            <Header />
            <div className="columns">
                <div className="column">
                    <h2 className="title is-2">index</h2>
                    <p className="content" style={{ fontSize: 32, fontWeight: 'bold' }}>トップページ</p>
                </div>
                <div className="column is-four-fifths"></div>
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
    )
}

export default IndexPage