import React from 'react';
import Head from 'next/head'

interface TitleProps {
    title: string;
}


function Title(props: TitleProps) {
    return (
        <Head>
            <title>{props.title}</title>
        </Head>
    );
}

export default Title;