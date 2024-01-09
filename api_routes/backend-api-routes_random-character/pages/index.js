import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {

  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return console.log("ERROR!", error);
  if (isLoading) return <div><h1>Data Is Loading ...</h1></div>;

  console.log("DATA: ", data)


  return (<>
    <main>
      <h1>HELLOOOO!!!! {data.firstName}!</h1>
      <br></br>
      <section>
        <h2>YOU LOOK GOOD TODAY!</h2>
        <br></br>
        <h2>YOUR PRIVATE DATA FOR EVERYBODY:</h2>
        <h2>LIVE IN THE INTERNET!!!</h2>
        <h3>First Name: {data.firstName}</h3>
        <h3>Last Name: {data.lastName}</h3>
        <p>Twitter: {data.twitterName}</p>
        <p>Adress: {data.adress}</p>
        <p>Geohash: {data.geohash}</p>
        <p>Birthday: {data.birthday}</p>
      </section>
    </main>
  </>)

}
