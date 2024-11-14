import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <Link href="/login">去登录</Link>
    </div>
  );
}
