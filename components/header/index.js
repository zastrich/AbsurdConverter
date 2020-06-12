function Header({ children }){
    return (
        <header>
            <h1>Absurd Converter</h1>
            <style jsx>{`
                header {
                    flex: 1;
                    background: #1D3557;
                    padding: 5px 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }

                h1 {
                    color: #fff;
                    margin: 0;
                    font-size: 18px;
                }
            }
        `}</style>
        </header>
    )
}

export default Header