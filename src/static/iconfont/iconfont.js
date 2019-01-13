import { createGlobalStyle } from 'styled-components';

export const IconFont = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1547359342611'); /* IE9 */
        src: url('./iconfont.eot?t=1547359342611#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOwAAsAAAAAB8QAAANhAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDBIJjATYCJAMQCwoABCAFhG0HQhvPBsgOJUFBwQDgAQBAPHyOle8n2b1c9oAVKAZ7pfFVN77AClioqlYYFLJCtUZWEevqndKpb71RTjkEX6IQsiy/ZJleJ31wSlygLQRTETcgnNqpl63If9w7bZ4HNp99y2WsSXueR12A8dbAxh46gQskQW8Yu6AlzifQzNtAcy6/tBYYFWazQNySRA4YMyqlITFUoVvRt4jnQKemp8w9wLPg+/FPdBhJOpnZ9vyVPCvI/Bk0Fw8H/g9o9VCAPZ0BbBAZG4BCXKs0XQAj7waoqZW1jgBVlZiqZPlc/P//iHMUUbX+8ghJJrrM+CFwgHyZn0EOQvBzOULiZ3ycDB9EUqH/NuANxs+umyRlbHKJl7FO93pGx/0axsd868dGvGtHRn1ax7P4FmXjSHEyP3L85fIXL+qfPat9/rxu18sc76YMNyS8fNlA186wgD3xqmUd5qbmsVB2xr+RO2veBUCL9r7tfKAZbGgYDN4lte7MATBw0Lzrqkbz0pPlWb6uwXtNtJwQNeS9vmHJ2iwXu/zJ8jsT3muySXy2x/vOmHeqFn0xdYOLvw+HiEb44uqjITgMPQMzyyT0qG2ZJ/PHiu/6/uA9/XD3UcZjhew+1s/0MZiF730UXBIKHq/JfYzn/7fkvLCnV9Qx2RYp/aX2d7pKrydGaHSnw8naemlem7kkM/lNewO9G+DzO3Dlx5WhQGYukz7m9UD/KjwP04D+f3gp/7XfeDvU1NuxIPW/0VzAh86v7sDSv6oF3dmvnq2y/xG7Y0rRuKa6FIXnsHRzsZNqJqFp+DNBJryeQjLdOZ5QTSeQDJiDrFpAF/wGdPQcQFd1DM26gsE9kxRQlEGs2QIgjDkOyYh3kI25jy74V9Ax4y10jQWE5iSWjNmzFBKbo2COYiuy9CGJJ27B1lI2TKzGYpeTU9LcgFiPFVVyoKjwyHygALuxMkUHtVuMplRAgkJcKB8shp1OgmSF2DFPw22UyskREULVjcJ54gKssxQYh8KsEIs+iIRHuAleZootfL4aJurixFEakqq09TCFSiofiRIusgO6QOTulHQrh6i6iaJRlAARKAgXJB8YMKflJRC5upYdxqPC2Qa4ZckiUDqhqyh8eYnrDWdBY25fIkWOEh3tAZYsEkeoFKVXMafwNiaLAwAAAAA=') format('woff2'),
        url('./iconfont.woff?t=1547359342611') format('woff'),
        url('./iconfont.ttf?t=1547359342611') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1547359342611#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;