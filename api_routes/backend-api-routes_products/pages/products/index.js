import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());


export default function Fish() {

    const { data, error, isLoading } = useSWR("/api/products", fetcher);

    if (error) return console.log("ERROR!", error);
    if (isLoading) return <div><h1>Data Is Loading ...</h1></div>;

    console.log("DATA: ", data)

    return (<>
        <main>
            <h1>Welcome to our Fish!</h1>
            <br></br>
            <div>
                <Link href='/' >
                    Home
                </Link>
            </div>
            <section>
                <ul>
                    {data && data.map((prod) => <li key={prod.id}>
                        <div>
                            <h1>{prod.name}</h1>
                            <p>{prod.price}</p>
                            <Link href={`products/${prod.id}.js`}>
                                Fish in Details
                            </Link>
                        </div>
                    </li>)}
                </ul>
            </section>
        </main >
    </>)
}