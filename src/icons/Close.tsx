import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    fill?: string;
}

const SvgComponent = (props: IconProps) => {
    const { fill = 'neutral-secondary', ...restProps } = props;

    return (
        <svg
            aria-hidden='true'
            focusable='false'
            className={`fl-${fill}`}
            width={24}
            height={24}
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 24 24'
            {...restProps}
        >
            <defs>
                <path
                    id='sIcClose'
                    d='M11.28 12L4 4.72 4.72 4 12 11.28 19.28 4l.72.72L12.72 12 20 19.28l-.72.72L12 12.72 4.72 20 4 19.28z'
                />
            </defs>
            <use xlinkHref='#sIcClose' fillRule='evenodd' />
        </svg>
    );
};

export default SvgComponent;
