import Head from 'next/head'
import Link from 'next/link'
import Header from './../components/header'

//Pallete: https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Absurd Converter</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
                <Link href="/distances"><a>this page!</a></Link>
            </main>

            <footer>

            </footer>

            <style jsx>{`
                .container {
                    width: 100%;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }

                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    )
}
