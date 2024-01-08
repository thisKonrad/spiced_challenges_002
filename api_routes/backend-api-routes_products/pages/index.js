import Link from "next/link";


export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Products!</h1>
      <section>
        <div>
          <Link href='products' >
            Show me Fish
          </Link>
        </div>
      </section>
    </div>
  );
}
