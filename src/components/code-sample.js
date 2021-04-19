import React from 'react';

export const CodeSample = ({ python, powershell, csharp, bash }) => {

    let languages = [];
    if (python) {
        languages.push({ name: "python", url: python});
    }
    if (powershell) {
        languages.push({ name: "powershell", url: powershell});
    }
    if (csharp) {
        languages.push({ name: "csharp", url: csharp});
    }
    if (bash) {
        languages.push({ name: "bash", url: bash});
    }

    const langItems = languages.map((lng) =>
        <li key={lng.name}><a href={lng.url}>{lng.name}</a></li>
    );

    return <ul>{langItems}</ul>;
};