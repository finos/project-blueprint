import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/styles.module.css';

export default function Project({imageUrl, name}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('text--center col col--4', styles.feature)}>
        {imgUrl && (
            <div className="text--center">
            <img className={styles.projectImage} src={imgUrl} alt={name} />
            </div>
        )}    
        </div>
    );
}