export default function ListOfConcepts(props) {
    console.log(props)
    return (


        <div>

            <h1>Textbook - Physics</h1>
            <div className="list__cn">
            <div className="list__cn-item"> Gravity  </div>
            <div className="list__cn-item"> Heat </div>
            <div className="list__cn-item"> Wave  </div>
</div>
            <style jsx>
                {
                    `
                    .list__cn{
                        display: grid;
                        grid-template-columns: 45% 45%;
                        padding:10px;
                    }
                    .list__cn-item{
                        width: 95%;
                         margin: 10px;
                        border: 1px solid grey;
                        background: white;
                        border-radius: 12px;
                        height:300px;
                        display:flex;
                        justify-content:center;
                        height: 100px;
                        align-items: center;
                    }
            
              
            `
                }
            </style>
        </div>

    )
}
ListOfConcepts.getInitialProps = async (ctx) => {
    const { id } = ctx.query
    return {
        id
    }
}