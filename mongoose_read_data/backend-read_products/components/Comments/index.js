export default function Comments({ data }) {
  console.log(data)
  return (
    <>
      <h3>Comments</h3>
      <ul>
        {data && [...data.reviews].map((review) => (
          <li key={review._id}>
            <h3>Review</h3>
            <h4>{review.title}</h4>
            <p>Rating: {review.rating}</p>
            <p>Comments: {review.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
