import Head from 'next/head'
import Header from './../../components/header'

export default function Distances() {
    return (
        <div className="container">
            <Head>
                <title>Distance</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <h1>Distances</h1>
        </div>
    )
}