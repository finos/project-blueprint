import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Project from '../components/project';
import Feature from '../components/feature';
import Vendor from '../components/vendor';

import { features } from '../components/feature-config';

const projects = [
  {
    "name": "FDC3",
    "imageUrl": "https://raw.githubusercontent.com/finos/finos-landscape/master/hosted_logos/fdc3.svg",
    "url": "https://fdc3.org"
  },
  {
    "name": "Legend",
    "imageUrl": "https://raw.githubusercontent.com/finos/finos-landscape/master/hosted_logos/legend.svg",
    "url": "https://legend.finos.org"
  },
  {
    "name": "Plexus Interop",
    "imageUrl": "https://raw.githubusercontent.com/finos/finos-landscape/master/hosted_logos/plexus-interop.svg",
    "url": "https://finos-plexus.github.io/plexus-interop"
  }
]

const vendors = [
  {
    imageUrl: 'img/vendors/morgan-stanley-800.png',
    name: 'Morgan Stanley'
  },
  {
    imageUrl: 'img/vendors/github-800.png',
    name: 'GitHub'
  },
  {
    imageUrl: 'img/vendors/red-hat-800.png',
    name: 'Red Hat'
  }
]

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 style={{visibility: 'hidden'}} className="hero__title">{siteConfig.title}</h1>
          <img style={{width: '100px'}} src={useBaseUrl('https://github.com/finos/branding/blob/master/finos-logos/icon/FINOS_Icon_White.png?raw=true')}/>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/what-is-odp')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
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
        {vendors && vendors.length && (
          <section className={styles.members}>
            <div className="container">
              <div className="row row--center">
                <h2>Community Participants</h2>
              </div>
              <div className="row">
                {vendors.map((props, idx) => (
                  <Vendor key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {projects && projects.length && (
          <section className={styles.projects}>
            <div className="container">
              <div className="row row--center">
                <h2>Used by FINOS Projects</h2>
              </div>
              <div className="row">
                {projects.map((props, idx) => (
                  <Project key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;