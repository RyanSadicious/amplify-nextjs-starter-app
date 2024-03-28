import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
            <div className={styles.title}>
              <Image src="/amplify.svg" alt="Amplify Logo" width={24} height={24} />
              <h1>Amplify Gen 2</h1>
            </div>
          </main>
  )
}
