import * as React from "react"
import { SVGProps } from "react"
const SvgBackground = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1920}
        height={955}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path fill="#000" d="M0-587h1920V943H0z" />
            <path
                fill="#5E409E"
                d="M1406-139.746C1406-765 2084.5-613.652 2070.88-647l183.3 321.001L2219.38 1615c-210-54-553.12-259.7-598-630-24-198-4.94-275.569 86.7-588.75 77.9-266.204 97.64-391.132 37.16-463.564-57.04-56.474-159.4 20.695-242.51 72.432-83.11 51.737-96.73-84.939-96.73-144.864Z"
            />
            <path
                stroke="#fff"
                strokeWidth={3}
                d="M1341-164.746C1341-790 2018.7-638.652 2005.09-672l183.09 321.001L2153.42 1590c-209.76-54-552.47-259.7-597.3-630-23.97-198-4.93-275.569 86.6-588.75 77.81-266.204 97.53-391.132 37.12-463.564-56.97-56.474-159.21 20.695-242.22 72.432-83.01 51.737-96.62-84.939-96.62-144.864Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h1920v955H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgBackground
