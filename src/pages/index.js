import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import { Helmet } from 'react-helmet'

const IndexPage = () => {
    return (
        <div>
            <Helmet
                htmlAttributes={{
                    lang: 'ja',
                }}
                title='2020年度 トライデントコンピュータ専門学校 Webデザイン学科授業資料'
                meta={[
                    {
                        name: 'description',
                        content: 'トライデントコンピュータ専門学校Webデザイン学科の河口担当教科授業資料'
                    },
                    {
                        name: 'robot',
                        content: 'noindex'
                    }
                ]}
            />
            <Layout>
                {
                    <div className="wrapper">
                        <section className="section">
                            <div className="container">
                                <h2 className="title is-3">WF1（1年生）</h2>
                                <div className="columns">
                                    <div className="column is-4">
                                        <h2 className="title is-5">ベクターグラフィックス</h2>
                                        <div className="content">
                                            <ol>
                                                <li><Link to="/vector/post-0">概要</Link></li>
                                                <li><Link to="/vector/post-1">はじめてのIllustrator</Link></li>
                                                <li><Link to="/vector/post-2">はじめてのベジェ曲線</Link></li>
                                                <li><Link to="/">トレース（ベジェ曲線演習）</Link></li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="column is-4">
                                        <h2 className="title is-5">業界研究（Webリテラシー）</h2>
                                        <div className="content">
                                            <ol>
                                                <li><Link to="/industry/post-0">概要</Link></li>
                                                <li><Link to="/industry/post-1">Webブラウザ</Link></li>
                                                <li><Link to="/industry/post-2">Webサーバー</Link></li>
                                                <li><Link to="/">ネットワーク技術</Link></li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="column is-4">
                                        <h2 className="title is-5">Webデザイン</h2>
                                        <div className="content">
                                            <ol>
                                                <li><Link to="/webdesign/post-0">概要</Link></li>
                                                <li><Link to="/webdesign/post-1">はじめてのPhotoshop</Link></li>
                                                <li><Link to="/webdesign/post-2">合成してみよう</Link></li>
                                                <li><Link to="/">様々なマスキング</Link></li>
                                            </ol>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="section">
                            <div className="container">
                                <h2 className="title is-3">WS1（2年生）</h2>
                                <div className="columns">
                                    <div className="column is-4">
                                        <h2 className="title is-5">グラフィックデザイン</h2>
                                        <div className="content">
                                            <ol>
                                                <li><Link to="/graphics/post-0">概要</Link></li>
                                                <li><Link to="/graphics/post-1">デザイン腕試し（名刺）</Link></li>
                                                <li><Link to="/graphics/post-2">タイポグラフィ</Link></li>
                                                <li><Link to="/">グリッドデザイン</Link></li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="column is-4">
                                        <h2 className="title is-5">JavaScript演習</h2>
                                        <div className="content">
                                            <ol>
                                                <li><Link to="/javascript/post-0">概要</Link></li>
                                                <li><Link to="/javascript/post-1">jQuery</Link></li>
                                                <li><Link to="/javascript/post-2">formからのデータ取得</Link></li>
                                                <li><Link to="/">Ajax</Link>
                                                    <ul>
                                                        <li><Link to="/">Git準備</Link></li>
                                                    </ul></li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="column is-4">
                                        <h2 className="title is-5">Webアプリ制作</h2>
                                        <div className="content">
                                            <ol>
                                                <li><Link to="/application/post-0">概要</Link></li>
                                                <li><Link to="/application/post-1">UX手法_インタビュー</Link></li>
                                                <li><Link to="/">UX手法_ペルソナ作成</Link></li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-4">
                                        <h2 className="title is-5">就職研究</h2>
                                        <div className="content">
                                            <ol>
                                                <li><Link to="/jobhunting/post-0">概要</Link></li>
                                                <li><Link to="/jobhunting/post-1">就職活動報告</Link></li>
                                                <li><Link to="/jobhunting/post-2">1分間スピーチ①</Link></li>
                                                <li><Link to="/">1分間スピーチ②</Link></li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                }
            </Layout>
        </div>
    )
}

export default IndexPage