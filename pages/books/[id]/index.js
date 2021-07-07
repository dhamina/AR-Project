import { getBooksConcepts } from "../../../api/auth";

export default function ListOfConcepts(props) {
  console.log(props);
  return <div>Concepts page</div>;
}
ListOfConcepts.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const payload = {
    _id: "60df33cb7a3d080db4786c73",
  };
  const bookDetails = await getBooksConcepts(payload);
  const {contents} = bookDetails.data
  console.log(contents)
  return {
    id,
    contents
  };
};
