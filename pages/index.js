import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import Header from './../components/header'

//Pallete: https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const units = await prisma.units.findMany()
    
    return {
      props: {
        units
      }
    }
  }

export default ({ units }) => {
    console.log(units)

    return (
        <div className="container">
            <main>
                <Header title={`Absurd Converter - Home`} />
                <img src={"/brand/logo-absurd.svg"} className="logo" />
            </main>

            
            <style jsx>{`
                .container {
                    width: 100%;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .logo {
                    max-width: 220px;
                    margin-top: 20%;
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
