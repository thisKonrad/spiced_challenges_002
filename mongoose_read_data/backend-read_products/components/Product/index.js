import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from 'components/Comments/index.js'


export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <br></br>
      <p>Description: {data.description}</p>
      <br></br>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <br></br>
      <p>
        Review: {data.reviews ? <Comments data={data} /> : 'no review'}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
