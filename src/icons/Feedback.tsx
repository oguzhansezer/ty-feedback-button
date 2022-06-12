import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    fill?: string;
}

const SvgComponent = (props: IconProps) => {
    const { fill = 'neutral-secondary', ...restProps } = props;

    return (
        <svg
            width='700pt'
            height='700pt'
            version='1.1'
            viewBox='0 0 700 700'
            xmlns='http://www.w3.org/2000/svg'
            {...restProps}
        >
            <defs>
                <symbol id='n' overflow='visible'>
                    <path d='m28.859-1.7188c-1.4922 0.77344-3.043 1.3516-4.6562 1.7344-1.6055 0.39453-3.2891 0.59375-5.0469 0.59375-5.2305 0-9.375-1.457-12.438-4.375-3.0547-2.9258-4.5781-6.8945-4.5781-11.906 0-5.0195 1.5234-8.9883 4.5781-11.906 3.0625-2.9258 7.207-4.3906 12.438-4.3906 1.7578 0 3.4414 0.19922 5.0469 0.59375 1.6133 0.38672 3.1641 0.96484 4.6562 1.7344v6.5c-1.5-1.0195-2.9805-1.7695-4.4375-2.25-1.4609-0.47656-2.9961-0.71875-4.6094-0.71875-2.8867 0-5.1562 0.92969-6.8125 2.7812-1.6562 1.8555-2.4844 4.4062-2.4844 7.6562 0 3.2422 0.82812 5.7891 2.4844 7.6406 1.6562 1.8438 3.9258 2.7656 6.8125 2.7656 1.6133 0 3.1484-0.23438 4.6094-0.70312 1.457-0.47656 2.9375-1.2266 4.4375-2.25z' />
                </symbol>
                <symbol id='i' overflow='visible'>
                    <path d='m21.125-17.141c-0.66797-0.3125-1.3281-0.53906-1.9844-0.6875-0.64844-0.14453-1.2969-0.21875-1.9531-0.21875-1.9375 0-3.4336 0.62109-4.4844 1.8594-1.043 1.2422-1.5625 3.0156-1.5625 5.3281v10.859h-7.5156v-23.562h7.5156v3.875c0.96875-1.5391 2.0781-2.6641 3.3281-3.375 1.2578-0.70703 2.7695-1.0625 4.5312-1.0625 0.25 0 0.51953 0.011719 0.8125 0.03125 0.28906 0.023438 0.71875 0.070312 1.2812 0.14062z' />
                </symbol>
                <symbol id='a' overflow='visible'>
                    <path d='m27.141-11.844v2.1406h-17.609c0.17578 1.7734 0.8125 3.1016 1.9062 3.9844 1.0938 0.88672 2.625 1.3281 4.5938 1.3281 1.582 0 3.2031-0.23438 4.8594-0.70312 1.6641-0.47656 3.375-1.1914 5.125-2.1406v5.7969c-1.7812 0.67969-3.5625 1.1875-5.3438 1.5312s-3.5625 0.51562-5.3438 0.51562c-4.2617 0-7.5742-1.082-9.9375-3.25-2.3672-2.1641-3.5469-5.207-3.5469-9.125 0-3.832 1.1602-6.8477 3.4844-9.0469 2.3203-2.207 5.5156-3.3125 9.5781-3.3125 3.707 0 6.6719 1.1172 8.8906 3.3438 2.2266 2.2305 3.3438 5.2109 3.3438 8.9375zm-7.75-2.5c0-1.4258-0.41797-2.5781-1.25-3.4531-0.83594-0.88281-1.9219-1.3281-3.2656-1.3281-1.4609 0-2.6484 0.41406-3.5625 1.2344-0.90625 0.82422-1.4766 2.0078-1.7031 3.5469z' />
                </symbol>
                <symbol id='e' overflow='visible'>
                    <path d='m14.172-10.594c-1.5625 0-2.7461 0.26562-3.5469 0.79688-0.79297 0.53125-1.1875 1.3125-1.1875 2.3438 0 0.96094 0.31641 1.7109 0.95312 2.25 0.64453 0.54297 1.5352 0.8125 2.6719 0.8125 1.4141 0 2.6094-0.50781 3.5781-1.5312 0.96875-1.0195 1.4531-2.2891 1.4531-3.8125v-0.85938zm11.516-2.8438v13.438h-7.5938v-3.4844c-1.0117 1.4297-2.1523 2.4688-3.4219 3.125-1.2617 0.64453-2.793 0.96875-4.5938 0.96875-2.4375 0-4.4219-0.70703-5.9531-2.125-1.5234-1.4258-2.2812-3.2734-2.2812-5.5469 0-2.7695 0.94531-4.7969 2.8438-6.0781 1.9062-1.2891 4.8945-1.9375 8.9688-1.9375h4.4375v-0.59375c0-1.1875-0.47656-2.0547-1.4219-2.6094-0.9375-0.5625-2.4023-0.84375-4.3906-0.84375-1.6172 0-3.1172 0.16406-4.5 0.48438-1.3867 0.32422-2.6797 0.80859-3.875 1.4531v-5.7344c1.6133-0.39453 3.2344-0.69141 4.8594-0.89062 1.6328-0.20703 3.2656-0.3125 4.8906-0.3125 4.25 0 7.3164 0.83984 9.2031 2.5156 1.8828 1.6797 2.8281 4.4023 2.8281 8.1719z' />
                </symbol>
                <symbol id='h' overflow='visible'>
                    <path d='m11.844-30.25v6.6875h7.7656v5.3906h-7.7656v9.9844c0 1.0938 0.21094 1.8359 0.64062 2.2188 0.4375 0.38672 1.3008 0.57812 2.5938 0.57812h3.875v5.3906h-6.4531c-2.9805 0-5.0898-0.61719-6.3281-1.8594-1.2422-1.2383-1.8594-3.3477-1.8594-6.3281v-9.9844h-3.75v-5.3906h3.75v-6.6875z' />
                </symbol>
                <symbol id='d' overflow='visible'>
                    <path d='m19.641-20.109v-12.625h7.5781v32.734h-7.5781v-3.4062c-1.0312 1.3867-2.1719 2.4023-3.4219 3.0469s-2.6953 0.96875-4.3281 0.96875c-2.9062 0-5.293-1.1484-7.1562-3.4531-1.8672-2.3125-2.7969-5.2852-2.7969-8.9219 0-3.625 0.92969-6.5859 2.7969-8.8906 1.8633-2.3125 4.25-3.4688 7.1562-3.4688 1.625 0 3.0625 0.32812 4.3125 0.98438 1.2578 0.64844 2.4062 1.6562 3.4375 3.0312zm-4.9531 15.25c1.6016 0 2.8281-0.58594 3.6719-1.7656 0.85156-1.1758 1.2812-2.8906 1.2812-5.1406 0-2.2383-0.42969-3.9453-1.2812-5.125-0.84375-1.1758-2.0703-1.7656-3.6719-1.7656-1.6055 0-2.8359 0.58984-3.6875 1.7656-0.84375 1.1797-1.2656 2.8867-1.2656 5.125 0 2.25 0.42188 3.9648 1.2656 5.1406 0.85156 1.1797 2.082 1.7656 3.6875 1.7656z' />
                </symbol>
                <symbol id='c' overflow='visible'>
                    <path d='m16.156-4.8594c1.6133 0 2.8438-0.58594 3.6875-1.7656 0.85156-1.1758 1.2812-2.8906 1.2812-5.1406 0-2.2383-0.42969-3.9453-1.2812-5.125-0.84375-1.1758-2.0742-1.7656-3.6875-1.7656-1.6172 0-2.8555 0.59375-3.7188 1.7812-0.86719 1.1797-1.2969 2.8828-1.2969 5.1094 0 2.2422 0.42969 3.9531 1.2969 5.1406 0.86328 1.1797 2.1016 1.7656 3.7188 1.7656zm-5.0156-15.25c1.0391-1.375 2.1914-2.3828 3.4531-3.0312 1.2578-0.65625 2.7109-0.98438 4.3594-0.98438 2.9062 0 5.2891 1.1562 7.1562 3.4688 1.8633 2.3047 2.7969 5.2656 2.7969 8.8906 0 3.6367-0.93359 6.6094-2.7969 8.9219-1.8672 2.3047-4.25 3.4531-7.1562 3.4531-1.6484 0-3.1016-0.32422-4.3594-0.96875-1.2617-0.65625-2.4141-1.6719-3.4531-3.0469v3.4062h-7.5156v-32.734h7.5156z' />
                </symbol>
                <symbol id='g' overflow='visible'>
                    <path d='m0.53125-23.562h7.5312l6.3281 15.984 5.375-15.984h7.5312l-9.9062 25.797c-0.99219 2.6133-2.1523 4.4414-3.4844 5.4844-1.3242 1.0508-3.0703 1.5781-5.2344 1.5781h-4.3594v-4.9375h2.3594c1.2695 0 2.1953-0.20312 2.7812-0.60938 0.58203-0.40625 1.0352-1.1367 1.3594-2.1875l0.20312-0.65625z' />
                </symbol>
                <symbol id='b' overflow='visible'>
                    <path d='m3.9531-31.406h10.312l7.1406 16.812 7.2031-16.812h10.281v31.406h-7.6562v-22.969l-7.2344 16.938h-5.125l-7.25-16.938v22.969h-7.6719z' />
                </symbol>
                <symbol id='m' overflow='visible'>
                    <path d='m14.828-18.734c-1.668 0-2.9375 0.60156-3.8125 1.7969-0.875 1.1992-1.3125 2.9219-1.3125 5.1719 0 2.2617 0.4375 3.9922 1.3125 5.1875 0.875 1.1992 2.1445 1.7969 3.8125 1.7969 1.6445 0 2.8984-0.59766 3.7656-1.7969 0.86328-1.1953 1.2969-2.9258 1.2969-5.1875 0-2.25-0.43359-3.9727-1.2969-5.1719-0.86719-1.1953-2.1211-1.7969-3.7656-1.7969zm0-5.3906c4.0508 0 7.2188 1.0938 9.5 3.2812s3.4219 5.2148 3.4219 9.0781c0 3.875-1.1406 6.9062-3.4219 9.0938s-5.4492 3.2812-9.5 3.2812c-4.0625 0-7.2461-1.0938-9.5469-3.2812-2.293-2.1875-3.4375-5.2188-3.4375-9.0938 0-3.8633 1.1445-6.8906 3.4375-9.0781 2.3008-2.1875 5.4844-3.2812 9.5469-3.2812z' />
                </symbol>
                <symbol id='f' overflow='visible'>
                    <path d='m27.297-14.344v14.344h-7.5625v-10.938c0-2.0625-0.046875-3.4766-0.14062-4.25-0.09375-0.76953-0.25-1.3359-0.46875-1.7031-0.30469-0.48828-0.71094-0.86719-1.2188-1.1406-0.5-0.28125-1.0703-0.42188-1.7031-0.42188-1.5742 0-2.8125 0.60938-3.7188 1.8281-0.89844 1.2109-1.3438 2.8867-1.3438 5.0312v11.594h-7.5156v-32.734h7.5156v12.625c1.1445-1.375 2.3516-2.3828 3.625-3.0312 1.2812-0.65625 2.6914-0.98438 4.2344-0.98438 2.7188 0 4.7812 0.83594 6.1875 2.5 1.4062 1.668 2.1094 4.0938 2.1094 7.2812z' />
                </symbol>
                <symbol id='l' overflow='visible'>
                    <path d='m25.453-19.641c0.94531-1.457 2.0781-2.5664 3.3906-3.3281 1.3125-0.76953 2.7539-1.1562 4.3281-1.1562 2.707 0 4.7695 0.83594 6.1875 2.5 1.4141 1.668 2.125 4.0938 2.125 7.2812v14.344h-7.5781v-12.281c0.007812-0.1875 0.019531-0.375 0.03125-0.5625 0.007812-0.19531 0.015625-0.47656 0.015625-0.84375 0-1.6758-0.24609-2.8906-0.73438-3.6406-0.49219-0.75-1.2812-1.125-2.375-1.125-1.4375 0-2.5469 0.59375-3.3281 1.7812-0.77344 1.1797-1.1719 2.8828-1.2031 5.1094v11.562h-7.5781v-12.281c0-2.6133-0.22656-4.2969-0.67188-5.0469-0.44922-0.75-1.2461-1.125-2.3906-1.125-1.4492 0-2.5703 0.59375-3.3594 1.7812-0.78125 1.1875-1.1719 2.8828-1.1719 5.0781v11.594h-7.5625v-23.562h7.5625v3.4531c0.92578-1.332 1.9883-2.332 3.1875-3 1.207-0.67578 2.5312-1.0156 3.9688-1.0156 1.625 0 3.0625 0.39844 4.3125 1.1875 1.25 0.78125 2.1953 1.8828 2.8438 3.2969z' />
                </symbol>
                <symbol id='k' overflow='visible'>
                    <path d='m19.125-32.734v4.9531h-4.1719c-1.0625 0-1.8086 0.19531-2.2344 0.57812-0.41797 0.38672-0.625 1.0547-0.625 2v1.6406h6.4375v5.3906h-6.4375v18.172h-7.5312v-18.172h-3.7344v-5.3906h3.7344v-1.6406c0-2.5625 0.71094-4.457 2.1406-5.6875 1.4375-1.2266 3.6562-1.8438 6.6562-1.8438z' />
                </symbol>
                <symbol id='j' overflow='visible'>
                    <path d='m3.625-23.562h7.5156v23.141c0 3.1562-0.75781 5.5625-2.2656 7.2188-1.5117 1.6641-3.7031 2.5-6.5781 2.5h-3.7344v-4.9375h1.3125c1.4258 0 2.4062-0.32422 2.9375-0.96875 0.53906-0.64844 0.8125-1.918 0.8125-3.8125zm0-9.1719h7.5156v6.1406h-7.5156z' />
                </symbol>
            </defs>
            <g>
                <path d='m580.51 28h-461.02c-22.582 0-40.957 18.375-40.957 40.957v272.57c0 22.582 18.375 40.957 40.957 40.957h9.3984l-49.539 132.07c-0.51562 1.3711-0.72266 2.7734-0.76562 4.1602 0 0.16406-0.027343 0.32031-0.027343 0.48438 0.007812 1.5078 0.30859 2.9805 0.82812 4.3672 0.058594 0.17188 0.09375 0.32031 0.16406 0.48438 0.61328 1.4648 1.4922 2.8008 2.6016 3.9531 0.050781 0.050781 0.058593 0.12891 0.11328 0.17969 0.027343 0.027344 0.058593 0.035157 0.085937 0.058594 1.1133 1.1133 2.457 2 3.9727 2.6719 0.12891 0.050781 0.24219 0.12891 0.36328 0.17969 0.078125 0.035156 0.14453 0.085937 0.21484 0.11328 1.5117 0.54297 3.0391 0.80078 4.5547 0.80078s2.9727-0.33594 4.3672-0.84375c0.42969-0.16406 0.80859-0.38672 1.2227-0.58594 1.0078-0.5 1.9297-1.0938 2.793-1.8359 0.22266-0.19141 0.5-0.25781 0.71484-0.47266l147.3-145.79h332.66c22.582 0 40.957-18.375 40.957-40.957l0.003907-272.57c-0.007813-22.582-18.387-40.949-40.969-40.949zm15.113 313.52c0 8.332-6.7812 15.113-15.113 15.113l-337.89-0.003907h-0.070312-0.027344v0.007813c-3.2812 0-6.5742 1.2305-9.0898 3.7305l-109.2 108.07 35.383-94.355c2.5078-6.6758-0.87891-14.129-7.5547-16.637-1.5-0.55859-3.0312-0.78516-4.5391-0.78516v-0.042969h-28.043c-8.332 0-15.113-6.7812-15.113-15.113v-272.56c0-8.332 6.7812-15.113 15.113-15.113h461.03c8.332 0 15.113 6.7812 15.113 15.113z' />
                <path d='m422.27 189.93-41.922-6.1016-18.746-37.992c-2.1797-4.4102-6.668-7.2031-11.586-7.2031s-9.4062 2.793-11.586 7.2031l-18.766 37.992-41.93 6.1016c-4.8672 0.70703-8.9102 4.1172-10.434 8.7969-1.5156 4.6797-0.25 9.8125 3.2734 13.25l30.344 29.578-7.168 41.766c-0.83594 4.8516 1.1641 9.7539 5.1445 12.648 3.9805 2.8867 9.2539 3.2734 13.613 0.98047l37.512-19.73 37.496 19.719c1.8945 1 3.9531 1.4922 6.0117 1.4922 2.6797 0 5.3398-0.83594 7.5977-2.4648 3.9805-2.8945 5.9688-7.7891 5.1445-12.641l-7.168-41.777 30.336-29.578c3.5234-3.4375 4.7891-8.5742 3.2734-13.25-1.5312-4.6719-5.582-8.082-10.441-8.7891zm-46.082 37.855c-3.0508 2.9727-4.4375 7.2461-3.7227 11.441l3.8867 22.648-20.324-10.691c-3.7734-1.9727-8.2617-1.9727-12.035 0l-20.34 10.699 3.8867-22.648c0.71484-4.1953-0.67188-8.4688-3.7227-11.441l-16.465-16.043 22.734-3.3086c4.2031-0.61328 7.8477-3.2461 9.7266-7.0664l10.191-20.621 10.176 20.609c1.8789 3.8164 5.5234 6.4609 9.7266 7.0742l22.746 3.3086z' />
                <path d='m247.93 200.5 24.383-23.77c3.5234-3.4297 4.7891-8.5625 3.2656-13.242-1.5234-4.6797-5.5664-8.0898-10.434-8.7969l-33.688-4.9023-15.078-30.531c-2.1719-4.4102-6.668-7.2031-11.586-7.2031-4.918 0-9.4062 2.793-11.586 7.2031l-15.059 30.523-33.695 4.9023c-4.8672 0.70703-8.9102 4.1172-10.434 8.7969-1.5156 4.6797-0.25 9.8125 3.2734 13.25l24.383 23.77-5.7539 33.559c-0.82812 4.8516 1.1641 9.7422 5.1445 12.641 2.2578 1.6367 4.918 2.4727 7.5977 2.4727 2.0586 0 4.125-0.49219 6.0117-1.4805l30.129-15.836 30.137 15.836c4.3516 2.2812 9.625 1.9023 13.613-0.98047 3.9805-2.8867 5.9688-7.7891 5.1445-12.641zm-22.91-13.758c-3.043 2.9648-4.4375 7.2461-3.7148 11.434l2.4805 14.438-12.977-6.8242c-1.8789-0.99219-3.9453-1.4805-6.0117-1.4805-2.0664 0-4.125 0.5-6.0117 1.4805l-12.957 6.8164 2.4805-14.438c0.71484-4.1875-0.67188-8.4688-3.7227-11.441l-10.504-10.234 14.508-2.1094c4.2148-0.61328 7.8477-3.2578 9.7266-7.0742l6.4805-13.137 6.4961 13.148c1.8789 3.8086 5.5234 6.4609 9.7266 7.0664l14.508 2.1094z' />
                <path d='m555.55 154.69-33.676-4.9023-15.07-30.523c-2.1719-4.4102-6.6602-7.2031-11.586-7.2031-4.9297 0-9.418 2.793-11.586 7.2031l-15.066 30.523-33.711 4.9023c-4.8672 0.70703-8.9102 4.1172-10.434 8.7969-1.5234 4.6797-0.25 9.8125 3.2734 13.25l24.398 23.77-5.7539 33.547c-0.83594 4.8516 1.1641 9.7422 5.1445 12.641 3.9883 2.8945 9.2617 3.2656 13.613 0.98047l30.129-15.836 30.109 15.836c1.8945 0.99219 3.9531 1.4805 6.0117 1.4805 2.6797 0 5.3398-0.83594 7.5898-2.4648 3.9805-2.8867 5.9805-7.7891 5.1523-12.641l-5.7383-33.559 24.371-23.77c3.5156-3.4297 4.7812-8.5742 3.2656-13.25-1.5234-4.6602-5.5625-8.0742-10.438-8.7812zm-40.113 32.051c-3.043 2.9648-4.4297 7.2383-3.7148 11.434l2.4727 14.449-12.965-6.8242c-3.7734-1.9727-8.2617-1.9805-12.027 0l-12.965 6.8242 2.4727-14.438c0.71484-4.1953-0.67188-8.4688-3.7227-11.441l-10.512-10.234 14.527-2.1094c4.2031-0.61328 7.8477-3.2578 9.7266-7.0742l6.4883-13.137 6.4883 13.137c1.8789 3.8164 5.5234 6.4609 9.7266 7.0742l14.508 2.1094z' />
            </g>
        </svg>
    );
};

export default SvgComponent;
