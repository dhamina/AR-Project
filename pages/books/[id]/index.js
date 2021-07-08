import { getBooksConcepts } from "../../../api/auth";

export default function ListOfConcepts(props) {
    const { contents,bookName } = props
    return (
        <div>
            <h1 className="list__tle">Textbook - {bookName}</h1>
            <div className="list__cn">
                {
                    contents.map((r) => {
                        return (
                            <div className="list__cn-item"> {r.name}  </div>
                        )
                    })
                }
            </div>
            <style jsx>
                {
                    `
                    .list__tle{
                        margin: 20px 10px;
                    }
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
    const { id } = ctx.query;
    const payload = {
        _id: id,
    };
    const bookDetails = await getBooksConcepts(payload);
    const { contents,bookName } = bookDetails.data
    return {
        id,
        contents,
        bookName
    };
};
