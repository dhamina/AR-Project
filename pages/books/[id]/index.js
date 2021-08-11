import { useState } from "react";
import { getBooksConcepts } from "../../../api/auth";
import Popup from "../../../components/pop-up/pop-up";


export default function ListOfConcepts(props) {
    const { contents,bookName } = props
    const [showPop,setShowPop] = useState(false)
    const popClose = ()=>{
        // setShowPop(false)
        window.location.href=('https://vikkysri.blob.core.windows.net/$web/Build/index.html')
    }
    return (
        <div>
            <h1 className="list__tle">Textbook - {bookName}</h1>
            <div className="list__cn">
                  {/* <Popup isOpen={ showPop } onClose={()=>popClose()}>
               <section className="video">
                <iframe title="magzter" className="videoIFrame" src="https://vikkysri.blob.core.windows.net/$web/Build/index.html" width="100%" height="388px" frameBorder="0" allowFullScreen />
                </section>
  </Popup> */}

               
                {
                    contents.map((r) => {
                        return (
                            <div onClick={()=>popClose()} className="list__cn-item"> {r.name}  </div>
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
                        cursor:pointer;
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
