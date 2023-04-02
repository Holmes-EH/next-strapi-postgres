import Image from 'next/image'
import type { Metadata } from 'next'
import styles from './page.module.css'
import Link from 'next/link'
import { HomeData } from './types/strapiContentTypes/homeData'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      'http://127.0.0.1:1337/api/home-page?populate[Seo]=deep',
      { next: { revalidate: 10 } }
    )
    const {
      data: {
        attributes: { Seo },
      },
    } = await res.json()
    return { title: Seo[0].title, description: Seo[0].description }
  } catch (error) {
    console.error(error)
    return {}
  }
}

async function getData(): Promise<HomeData> {
  const res = await fetch('http://127.0.0.1:1337/api/home-page?populate=deep')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const { data } = await res.json()
  return data.attributes
}

export default async function Home() {
  const homeData = await getData()
  return (
    <main className={styles.main}>
      <div className={styles.hero} id="top">
        <div className={styles.heroImages}>
          <Link href={'https://beta.nextjs.org/docs'} target="_blank">
            <div className={styles.center}>
              <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
              <div className={styles.thirteen}>
                <Image
                  src="/thirteen.svg"
                  alt="13"
                  width={40}
                  height={31}
                  priority
                />
              </div>
            </div>
          </Link>
          <div className={styles.ampersand}>&amp;</div>
          <Link href={'https://docs.strapi.io/'} target="_blank">
            <div className={styles.center}>
              <Image
                src="/strapi.svg"
                alt="Strapi Logo"
                width={280}
                height={137}
                priority
              />
            </div>
          </Link>
        </div>
        <div>A Turborepo Starter template</div>
      </div>
      <h2>⬇︎ Data from Strapi ⬇︎</h2>
      <small>Text & image</small>
      {homeData.hero.map((hero) => {
        return (
          <div
            id="hero1"
            key={`hero-${hero.id}`}
            className={styles.hero}
            style={{
              alignItems: 'flex-end',
              width: '100%',
              minHeight: hero.heroImage.data.attributes.height,
              backgroundImage: `url(http://127.0.0.1:1337${hero.heroImage.data.attributes.url})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className={styles.heroText}>
              <h1>{hero.mainTitle}</h1>
              <h3>{hero.subTitle}</h3>
            </div>
          </div>
        )
      })}
      <h2>⬇︎ Data from Strapi ⬇︎</h2>
      <small>Text & color</small>
      {homeData.Sections.map((section) => {
        return (
          <div
            className={styles.section}
            key={`section-${section.sectionComponents.id}`}
            style={{ backgroundColor: section.sectionComponents.dominantColor }}
          >
            <h1>{section.sectionComponents.title}</h1>
            <p>{section.sectionComponents.description}</p>
          </div>
        )
      })}
      <div className={styles.footer}>
        <h3>Take a look @ the source code :</h3>
        <Link
          href={'https://github.com/Holmes-EH/next-strapi-postgres'}
          target="
          _blank"
        >
          <div className={styles.center}>
            <Image
              className={`${styles.logo} ${styles.github}`}
              src="/github-icon.svg"
              alt="Github Logo"
              width={80}
              height={80}
              priority
            />
          </div>
        </Link>
      </div>
    </main>
  )
}
