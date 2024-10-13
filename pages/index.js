import {Layout} from "@/components/Layout";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {getPostsData} from "@/lib/post";
import {siteTitle} from "../components/Layout"
import Head from "next/head";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// SSRの場合
// export async function getServerSideProps(context) {
//
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   }
// }


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p className={utilStyle.headingMd}>
          私はフルスタックエンジニアです。好きな言語はJavaScriptです。
        </p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, data}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={`${data.thumbnail}`}
                  className={styles.thumbnailImage}
                ></img>
              </Link>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{data.title}</a>
              </Link>
              <br/>
              <small className={utilStyle.lightText}>
                {data.date}
              </small>
            </article>
          ))}
        </div>
      </section>
  </Layout>);
}
