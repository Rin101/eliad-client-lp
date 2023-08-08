import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={``}>
      <div className={`px-6 sm:px-12 w-full flex justify-between py-4`}>
        <Link href={"/"}>
          <p className={`font-semibold`}>エリアド</p>
        </Link>
        <Link href={"https://eliad.vercel.app"}>
          <p className={`font-semibold text-xs text-gray-500`}>ユーザーの方はこちら</p>
        </Link>
      </div>
      <section className={`${styles.topSection} ${styles.topSectionSm}`}>
        <img className={styles.bgImg} src="/img/white-bg.jpg" alt="" />
        <div className={`${styles.topContent} px-6 sm:px-12 pb-6 flex justify-between my-7 items-center lg:justify-center`}>
          <div>
            <h1 className={`font-extrabold text-[30px] ${styles.topText}`}>転職市場でリーチしにくい<br/>優秀人材をスカウトできる<br/>キャリアQAサイト</h1>
            <h1 className={`font-extrabold text-[30px] sm:text-[40px] ${styles.mainGreen} my-8`}>エリアド</h1>
            <div className={`px-7 sm:px-10 py-3 rounded-sm ${styles.contactButton} w-fit`}>
              <p className={`font-bold text-sm sm:text-normal text-white`}>問い合わせる</p>
            </div>
          </div>
          <div className={`w-1/2 flex items-start ${styles.topImage}`}>
            <Image className={`object-contain h-96`} alt="デスク" src={'/img/livechat.jpg'} width={800} height={800} />
          </div>
        </div>
      </section>
      <section className={`${styles.topSection} ${styles.topSectionLg} px-6 sm:px-12 pb-6 flex justify-between my-7 items-center lg:justify-center`}>
        <div>
          <h1 className={`font-extrabold text-[30px] ${styles.topText}`}>転職市場でリーチしにくい<br/>優秀人材をスカウトできる<br/>キャリアQAサイト</h1>
          <h1 className={`font-extrabold text-[30px] sm:text-[40px] ${styles.mainGreen} my-8`}>エリアド</h1>
          <div className={`px-7 sm:px-10 py-3 rounded-sm ${styles.contactButton} w-fit`}>
            <p className={`font-bold text-sm sm:text-normal text-white`}>問い合わせる</p>
          </div>
        </div>
        <div className={`w-1/2 flex items-start ${styles.topImage}`}>
          <Image className={`object-contain h-96`} alt="デスク" src={'/img/livechat.jpg'} width={800} height={800} />
        </div>
      </section>
      <div className={`px-6 sm:px-12 ${styles.points}`}>
        <section>
          <Image className={`object-contain w-[40%]`} alt="電車内" src={'/img/train.jpg'} width={800} height={800} />
          <div className={styles.pointSpacer}></div>
          <div className={`${styles.textBox}`}>
            <h2 className={styles.heading}>はじめに</h2>
            <p className={styles.context}>
              エリアド（エリートアドバイス）は、仕事に悩めるすべての人にカジュアルに相談に乗りアドバイスするサービスです。<br/>
              この資料では、具体的なイメージを持っていただくためにどのような事例をもってご活用いただくか、本プロダクト思想や事例、活用の仕方を紹介します。
            </p>
          </div>
        </section>
        <section>
          <div className={`mr-10 ${styles.textBox}`}>
            <h2 className={styles.heading}>サービスの強み</h2>
            <p className={styles.context}>
              OBOG訪問やカジュアル相談においての障壁は、<br/>
              「こんなこと聞いていいのだろうか」<br/>
              「うまく聞けないから怖くて相談できない」という事例がとても多く、見切り発車で相談に持ち込んでも、お互いの時間の損失につながりやすいことが課題でした。
            </p>
            <p className={styles.context}>
              弊グループでは、人材業界で転職相談、キャリアアドバイザー/コンサルタントとしてトップの実績を獲得した実績のあるアシスタントが在籍しているため、
              上記のような質問に対して審査を行い、咀嚼を促し解決しやすい相談要項にすることでお互い有意義な時間になるように設計しております。
            </p>
          </div>
          <Image className={`object-contain w-[40%]`} alt="インタビュー" src={'/img/interview.jpg'} width={800} height={800} />
        </section>
        <section>
          <div className={styles.textBox}>
            <h2 className={styles.heading}>なぜQA型の相談プラットフォーム？</h2>
            <h3 className={styles.subHeading}>フレンドシップ型の採用</h3>
            <p className={styles.context}>
              転職を全く検討していなかった人が、社外の人との出会いがきっかけで転職を決意するケースがあったり、
              転職サービスを使わずに転職が完結する人も増えています。
            </p>
            <p className={styles.context}>
              そのため、転職意欲が顕在化する前からの接点・認知づくりの重要性が高まっています。<br/>
              上記の観点から、「仕事の悩み相談に乗ってほしい」というニーズに当てはめ、QAサービスの展開をしております。<br/>
              また、有効な回答を得られることで、周りの友人、知人の紹介といったケースも発生し、１つの回答で複数のメリットを獲得できることも魅力の一つだと考えています。
            </p>
          </div>
        </section>
        <section>
          <div className={`mr-10 ${styles.textBox}`}>
            <h2 className={styles.heading}>回答することで得られるメリット</h2>
            <p className={styles.context}>
              転職や副業について最も課題に感じるべきなのは「このまま転職してもいいのだろうか」という疑問や不安を抱えていることが最多の例であることです。
            </p>
            <p className={styles.context}>
              そこをダイレクトに解決することで、転職潜在層から顕在層に変えることができるため、顕在層に変わってすぐの人材に、「そのビジョンを変えてくれた人からのスカウト」ということもあるため、有効で素早いスカウトをかけることができます。
            </p>
            <p className={styles.context}>
              また、直接的なスカウトにならずとも、回答を行い続けることで、回答のログはタイムラインに残り続けるため、後続のユーザーに見られることで、考え方やスタンスに共感し、採用応募エントリーにつながるケースも発生します。
            </p>
          </div>
          <Image className={`object-contain w-[40%]`} alt="質問" src={'/img/faq.jpg'} width={800} height={800} />
        </section>
      </div>
      <section className={`w-full flex flex-col items-center justify-center`}>
        <h2 className={`font-bold text-lg mb-10 text-center`}>導入事例</h2>
      </section>
      <section className={`w-full flex flex-col items-center justify-center`}>
        <h2 className={`font-bold text-lg mb-10 text-center`}>よくある質問</h2>
      </section>
    </main>
  )
}
