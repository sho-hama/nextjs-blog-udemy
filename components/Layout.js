import Head from "next/head";
import styles from "./layout.module.css";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";


export const siteTitle = "Next.js Blog";
export function Layout({children, home}) {
  const name = "Shoki Hamana"

  return(
    <div className={styles.container}>
      <Head>
        <link rel={"icon"} href={"/favicon.ico"}></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src={"/images/profile.png"}
              className={`${utilStyle.borderCircle} ${styles.headerHomeImage}`}/>
            <h1 className={utilStyle.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src={"/images/profile.png"}
              className={`${utilStyle.borderCircle}`}/>
            <h1 className={utilStyle.heading2Xl}>{name}</h1>
          </>
        )}

      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href={"/"}>←ホームに戻る</Link>
        </div>
      )}
    </div>
  )

}











