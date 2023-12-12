import { useRouter } from "next/router";
import { introduction } from "../../lib/data";
import {volumes} from '../lib/data.js'

export default function VolumeDetail(){
    const router = useRouter();
    const { slug } = router.query;

    return (<>
    <Head>
        <title>The Lord Of The Rings</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <p>{introduction}</p>
    </Head>
          <p>{ slug }</p>
          <ul>
          {volumes.map(({ id, slug, title })=> (
            <li key={id}>
                <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>))}
          </ul>
    </>
    );
}