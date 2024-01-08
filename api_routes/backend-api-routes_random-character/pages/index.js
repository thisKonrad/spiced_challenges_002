import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());



export default function HomePage() {
  const { data } = useSWR("./api/random-character.js", fetcher);
  return <h1>Hello {data.name}!</h1>;
}
