import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What you will learn',
    Svg: require('@site/static/img/dotnet_bot_presenting.svg').default,
    description: (
      <>
        You'll gain the knowledge and skills needed to build, deploy, and manage containerized applications effectively. Unleash the power of containers and embark on a journey of innovation in software development with our insightful blog series.
      </>
    ),
  },
  {
    title: 'Why is important',
    Svg: require('@site/static/img/my-dotnet-bot-mod.svg').default,
    description: (
      <>
        The importance of containers lies in their ability to provide scalable, portable, consistent, and efficient application environments. By embracing containers, organizations can streamline their software development processes, improve resource utilization, enhance security, and achieve faster and more reliable software delivery. Containers have become a crucial component of modern software development, enabling innovation and agility in an increasingly competitive digital landscape.
      </>
    ),
  },
  {
    title: 'Docker',
    Svg: require('@site/static/img/docker.svg').default,
    description: (
      <>
        Docker is a widely used containerization platform that allows developers to package, distribute, and run applications in a consistent and portable manner. It simplifies the process of deploying software by providing an isolated environment called a container, which contains all the necessary components and dependencies required for an application to run.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
