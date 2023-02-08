import React from 'react';
import localFont from '@next/font/local'

const zarathustraFont = localFont({ src: '../../public/zarathustra.otf' })
const Heading = ({ isFake, level, children, useBodyFont  }: { isFake?: boolean, level?: 1 | 2 | 3, useBodyFont?: boolean, children?: React.ReactNode }) => {
    return React.createElement(!isFake && level ? `h${level}` : 'span', useBodyFont ? {} : { className: zarathustraFont.className }, children);
}

export default Heading;