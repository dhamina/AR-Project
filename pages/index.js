import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import nextCookie from "next-cookies";
import Spinner from "../components/Spinner/Spinner";
import { getBooks } from "../api/auth";
export default function Home(props) {
  const { books } = props;
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(0);
  const [user, setUser] = useState("");
  useEffect(() => {
    const userCred = Cookies.get("user") || "";
    if (!userCred) {
      Router.push("/login");
    } else {
      setUser(JSON.parse(userCred));
      setLoading(false);
    }
  }, []);

  const onLogout = () => {
    Cookies.set("user", "");
    Router.push("/login");
  };
  return (
    <div>
      <div className="tlecn">
        <p
          className={`tlecn__item ${tab === 0 ? "active" : ""}`}
          onClick={() => setTab(0)}
        >
          <span>
            {tab === 0 ? (
              <img src="/icons/white-book.svg" />
            ) : (
              <img src="/icons/book.svg" />
            )}{" "}
          </span>
          Text Book
        </p>

        {/* <p
          className={`tlecn__item ${tab === 1 ? "active" : ""}`}
          onClick={() => setTab(1)}
        >
          <span>
            {tab === 1 ? (
              <img src="/icons/white-book.svg" />
            ) : (
              <img src="/icons/book.svg" />
            )}{" "}
          </span>
          Story Book
        </p> */}
      </div>
      <div>
        {books.map((r) => {
          return (
            <Link href="/books/[id]" as={`/books/${r._id}`}>
              <p className="book--itm">
                {r.name}{" "}
                <span>
                  <img src="/icons/arrow-right.svg" />
                </span>
              </p>
            </Link>
          );
        })}
      </div>
      <style jsx>
        {`
          .tlecn {
            display: flex;
            justify-content: center;
            border-bottom: 1px solid grey;
            border-top: 1px solid grey;
          }
          .tlecn__item {
            margin-top: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 0px;
            font-size: 24px;
            padding: 10px;
            cursor: pointer;
            width: 100%;
          }
          .tlecn__item img {
            width: 50px;
            height: 50px;
            margin-right: 17px;
          }
          .active {
            background: #3c88dc;
            color: white;
          }

          .book--itm {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid grey;
            padding: 20px 15px;
            margin: 0px;
            text-transform: capitalize;
            font-size: 20px;
            align-items: center;
          }
          .book--itm img {
            width: 30px;
            height: 30px;
          }
        `}
      </style>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const user = nextCookie(ctx);
  console.log(user);
  try {
    const books = await getBooks();
    return {
      user,
      books: books.data,
    };
  } catch (e) {}
  const books = [
    {
      _id: "60df349c47c1430dc49dd056",
      name: "Social Science",
    },
    {
      _id: "60df33cb7a3d080db4786c73",
      name: "Maths",
    },
  ];
  return {
    user,
    books,
  };
};
