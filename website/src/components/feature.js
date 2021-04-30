import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/styles.module.css';

export default function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('text--center col col--3', styles.feature)}>
        {imgUrl && (
            <div>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    );
}