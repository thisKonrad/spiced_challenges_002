
import Link from "next/link";
import { useRouter } from 'next/router'
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then((res) => res.json());



export default function Details() {

    const router = useRouter();
    const { id } = router.query;
    const { data, error, isLoading } = useSWR("/api/products/[id]", fetcher);

    if (error) return console.log("ERROR!", error);
    if (isLoading) return <div><h1>Data Is Loading ...</h1></div>;

    console.log("DATA: ", data)
    console.log("ID: ", { id })

    const ID = { id };


    return (<>
        <main>
            <h1>Fish in Details</h1>
            <br></br>
            <div>
                <Link href='/' >
                    Home
                </Link>
            </div>
            <section>
                <ul>
                    {data && data.map((prod) => prod.id === ID ?
                        <li>
                            <div>
                                <h1>{prod.name}</h1>
                                <p>{prod.description}</p>
                                <p>{prod.price}</p>
                                <p>{prod.currency}</p>
                                <p>{prod.category}</p>
                            </div>
                        </li>)}
                </ul>
            </section>
        </main >
    </>)
}