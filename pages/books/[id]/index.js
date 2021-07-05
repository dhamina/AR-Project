export default function ListOfConcepts(props) {
    console.log(props)
    return(
        <div>Concepts page</div>
    )
}
ListOfConcepts.getInitialProps = async (ctx) => {
    const {id} = ctx.query
    return{
        id
    }
}