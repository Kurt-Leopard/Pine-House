import * as React from "react"

const TrainingMaterialsIcon = ({ width=190, height=190 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={95} cy={95} r={94.5} stroke="#CA163D" />
    <g
      clipPath="url(#a)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#CA163D"
      stroke="#CA163D"
    >
      <path
        d="M47.38 76.651c.047-.902.095-1.71.38-2.47.237-.712.711-1.377 1.328-2.043a13.054 13.054 0 0 1 2.04-1.662c.665-.428 1.282-.665 2.326-.808.996-.142 2.42-.237 5.647-.285h11.056c2.847 0 3.511-.047 4.128 0 .617.048 1.234.238 1.851.57.57.285 1.139.713 1.803 1.33.617.57 1.329 1.33 2.325 2.328.95.998 2.183 2.233 3.322 3.088 1.091.855 2.088 1.377 7.355 1.615 5.22.237 14.71.19 20.262.142 5.552 0 7.166 0 8.352.38s1.993 1.188 2.752 2.043c.712.855 1.376 1.757 1.661 2.66.285.903.19 1.805.19 3.135 0 1.33.095 3.135.047 5.225-.047 2.09-.237 4.513-.285 10.879-.047 6.365.048 16.72.048 22.326 0 5.605 0 6.507-.38 7.41-.332.855-.996 1.71-1.85 2.565-.855.808-1.898 1.615-2.8 2.043-.902.427-1.708.475-2.515.427-.759-.047-1.519-.19-12.053-.19-10.487 0-30.749.143-41.33 0-10.583-.095-11.532-.475-12.338-.997a7.981 7.981 0 0 1-1.804-1.758c-.38-.57-.569-1.093-.854-1.663-.284-.522-.664-1.092-.806-10.118-.143-8.977-.095-26.41 0-35.009.095-8.598.284-8.36.427-4.655.095 3.705.142 10.878.237 14.963.095 4.085.237 5.083.285 6.318.047 1.235 0 2.755 0 7.03 0 4.276 0 11.258.047 15.059.095 3.847.285 4.465.617 5.13.332.617.807 1.235 1.139 1.71.332.475.57.808.759 1.14.19.333.332.713 1.044.998.712.285 1.993.475 12.622.522 10.63.048 30.56-.047 40.762 0 10.202 0 10.629.143 11.009.143.379 0 .711-.143.854-.333.142-.19.142-.427.522-.712.379-.285 1.139-.618 1.756-.855.616-.238 1.138-.381 1.66-.761s1.044-.997 1.376-1.567c.333-.57.475-1.093.428-9.121 0-8.027-.19-23.56-.428-31.683-.237-8.123-.521-8.836-1.138-9.549-.617-.712-1.566-1.425-2.99-1.71-1.423-.285-3.322-.19-8.779-.19-5.504 0-14.615-.095-19.455-.19-4.84-.095-5.41-.19-6.69-1.33-1.282-1.14-3.322-3.325-4.888-4.75-1.566-1.473-2.705-2.233-4.034-2.613-1.281-.38-2.752-.427-6.263-.427-3.512 0-9.016.047-12.243.285-3.227.237-4.129.665-4.793 1.188-.664.522-1.139 1.187-1.613 1.71-.475.522-.95.902-1.234 1.995-.285 1.092-.427 2.897-.617 3.657-.142.76-.332.523-.38-.095-.047-.617.048-1.662.096-2.612l.047.142Z"
        strokeWidth={0.288}
      />
      <path
        d="M56.728 91.282c9.206-.143 27.38-.143 36.775-.238 9.396-.095 9.965-.285 10.867-.285.902 0 2.183.19 3.606.285 1.424.095 2.99.143 5.41.19 2.42.048 5.694.048 7.497.19 1.804.143 2.088.428 2.231.618.142.19.142.332-4.366.427-4.508.048-13.524.048-23.252.143-9.727.047-20.214.19-25.671.19-5.457 0-5.884-.19-7.877-.285-1.993-.095-5.505-.095-8.162-.095-2.61 0-4.366 0-5.315-.095-.949-.095-1.186-.19-1.186-.428 0-.19.19-.475 9.396-.617h.047Z"
        strokeWidth={0.667}
      />
      <path
        d="M64.605 64.3c-.047-.997 0-2.66-.047-3.705-.048-.997-.19-1.377-.19-1.852 0-.475.142-1.045.332-1.805.19-.76.427-1.71 1.234-2.565.806-.855 2.183-1.663 3.322-2.185 1.138-.523 2.087-.76 5.789-.903 3.701-.142 10.154-.19 13.903 0 3.749.143 4.698.523 5.6 1.188.901.665 1.708 1.615 2.704 2.707.997 1.093 2.23 2.328 3.227 3.183.997.855 1.756 1.33 2.563 1.71.806.38 1.66.712 7.212.807 5.552.095 15.849-.047 21.544.238 5.646.285 6.69 1.045 7.545 1.852.806.808 1.423 1.663 1.85 2.518.38.855.57 1.758.664 2.993.048 1.235 0 2.802 0 10.403v28.644c0 7.315 0 8.265-.284 9.263-.285.997-.854 2.042-1.661 2.945-.807.902-1.851 1.662-3.844 1.995-1.993.332-4.887.285-6.69.237-1.756-.047-2.373-.095-2.61-.38-.238-.285-.095-.855.237-1.187.332-.333.902-.428 2.23-.475 1.281-.048 3.322-.048 4.983-.143 1.66-.095 2.942-.285 3.891-.95.949-.665 1.613-1.852 1.945-3.182.332-1.331.332-2.803.38-5.321.047-2.565.142-6.175.047-8.74-.047-2.565-.284-4.038-.332-5.51-.047-1.52.095-3.088.19-5.416.095-2.375.19-5.51.237-9.215 0-3.705 0-7.885-.237-10.64-.19-2.756-.569-4.038-.996-5.036-.38-1.045-.807-1.852-1.566-2.375-.712-.523-1.756-.808-6.122-.903-4.365-.047-12.053.048-17.272.143-5.22.095-7.972.143-9.823-.047s-2.847-.618-3.654-1.283c-.807-.665-1.423-1.568-2.42-2.803-.996-1.235-2.373-2.85-3.464-3.942-1.091-1.045-1.946-1.568-3.464-1.853-1.518-.285-3.701-.333-7.355-.238-3.654.096-8.779.333-11.91.808-3.085.475-4.129 1.188-4.888 1.948-.76.76-1.281 1.567-1.519 2.47-.19.902-.094 1.947-.142 2.992-.047.998-.237 1.995-.38 2.898-.142.903-.284 1.71-.427 1.9-.142.19-.284-.142-.332-1.187Z"
        strokeWidth={0.667}
      />
    </g>
    <defs>
      <clipPath id="training-materials-icon">
        <path fill="#fff" transform="translate(47 51)" d="M0 0h95v86.739H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default TrainingMaterialsIcon
