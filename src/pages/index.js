import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const features = [
  {
    title: <>Build web apps in your language</>,
    imageUrl: 'img/home-languages.svg',
    description: (
      <>
        Add rich interactive web UI to your backend apps, scripts, jobs written in <a href="/docs/tutorials/python">Python</a>, <a href="/docs/tutorials/bash">Bash</a>, <a href="/docs/tutorials/powershell">PowerShell</a> or <a href="/docs/tutorials/node">Node.js</a>.
      </>
    ),
  },
  {
    title: <>No HTML/CSS/JavaScript required</>,
    imageUrl: 'img/home-no-html.svg',
    description: (
      <>
        Focus on your work rather than fighting with endless JavaScript frameworks, HTML templates, requests parsing or state management.
      </>
    ),
  },
  {
    title: <>Zero deployment</>,
    imageUrl: 'img/home-zero-deploy.svg',
    description: (
      <>
        Instantly make your work available on the web by streaming app UI to a central Pglet web server or a <a href="/docs/pglet-service">hosted Pglet service</a>.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.customFields.heroTitle}`}
      description={`${siteConfig.tagline}`}>
      <div className="container">
        <header className={clsx('pglet-hero',styles.heroBanner)}>
          <div className="row">
            <div className="col col--6">
              <div className={styles.bkg}></div>
            </div>
            <div className="col col--6">
              <div className={styles.right}>
                <h1 className="hero__title">{siteConfig.customFields.heroTitle}</h1>
                <p className="hero__subtitle">{siteConfig.customFields.heroSubTitle}</p>
                <div className={styles.buttons}>
                  <Link
                    className={styles.indexCtasGetStartedButton}
                    to={useBaseUrl('docs/')}>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <Tabs>
          <TabItem value="apple" label="Apple" default>
            This is an apple 🍎
          </TabItem>
          <TabItem value="orange" label="Orange">
            This is an orange 🍊
          </TabItem>
          <TabItem value="banana" label="Banana">
            This is a banana 🍌
          </TabItem>
        </Tabs>
      </main>
    </Layout>
  );
}

export default Home;
