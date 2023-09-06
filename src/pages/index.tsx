import Title from '@/components/Title';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <main>
      <Title>Hello TypeScript!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
        <br />
        {isDesktop ? <span>Desktop</span> : <span>Mobile</span>}
      </p>
    </main>
  );
}
