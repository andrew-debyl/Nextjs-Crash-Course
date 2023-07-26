//import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}

export default function Home({ posts }) {
  //const [posts, setPosts] = useState([]);

  //useEffect(() => {
  //  async function fetchData() {
  //    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //    const data = await res.json();
  //    setPosts(data);
  //  }

  //  fetchData();
  //}, []);

  return (
    <>
      <h1>This is the home page</h1>
      {posts?.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </>
  );
}
