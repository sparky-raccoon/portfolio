import React, { ReactNode } from 'react';
import localFont from '@next/font/local'

const zarathustraFont = localFont({ src: '../../public/zarathustra.otf' })
type HeadingProps = {
    id?: string,
    isFake?: boolean,
    level?: 1 | 2 | 3,
    useBodyFont?: boolean,
    children?: ReactNode,
};

const Heading = ({ id, isFake, level, children, useBodyFont  }: HeadingProps) => {
    return React.createElement(
        !isFake && level ? `h${level}` : 'span',
        useBodyFont ? { id } : { id, className: zarathustraFont.className },
        children
    );
}

export default Heading;