import React from 'react';
import styles from './styles.module.css';

export const CodeSample = ({ src, height, python, powershell, csharp, bash }) => {

    let languages = [];
    if (python) {
        languages.push({ name: "Python", url: python});
    }
    if (powershell) {
        languages.push({ name: "Powershell", url: powershell});
    }
    if (csharp) {
        languages.push({ name: "C#", url: csharp});
    }
    if (bash) {
        languages.push({ name: "Bash", url: bash});
    }

    const langItems = languages.map((lng) =>
        <li key={lng.name}><a href={lng.url} target="_blank" title={`Open example in ${lng.name}`}>{lng.name}</a></li>
    );

    return <>
        <ul className={styles.codeLinks}>
            {/* <li><a href={src} target="_blank" title="Open demo in a new browser window">Demo</a></li> */}
            {langItems}
        </ul>
        <iframe
            src={src}
            style={{
                border: 'none',
                width: '100%',
                height: height ? height : '100px',
            }}>
        </iframe>
    </>;
};