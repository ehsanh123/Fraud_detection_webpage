import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/model_2">Model 2</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
      </ul>
    </nav>
  );
}
