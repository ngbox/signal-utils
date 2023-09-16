import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Unlock Efficiency',
    Svg: require('@site/static/img/lock.svg').default,
    description: (
      <>
        Say goodbye to cumbersome code. With our library's intuitive operators,
        you can create, transform, and manipulate Angular Signals effortlessly.
      </>
    ),
  },
  {
    title: 'Customize to Perfection',
    Svg: require('@site/static/img/customize.svg').default,
    description: (
      <>
        Tailor your signals with precision. Apply debounce, filtering, and more
        - just like the pros do with RxJS operators.
      </>
    ),
  },
  {
    title: 'Comprehensive Documentation',
    Svg: require('@site/static/img/docs.svg').default,
    description: (
      <>
        Our extensive documentation ensures you can hit the ground running,
        whether you're a novice or an expert.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
