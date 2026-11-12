import React from 'react';

interface LogoProps {
  className?: string;
}

export function ReactLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <mask id="mask-next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask-next)">
        <circle cx="90" cy="90" r="90" fill="#000000" stroke="#334155" strokeWidth="6" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HtmlLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor">
      <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z" />
      <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z" />
      <path fill="#EBEBEB" d="M256 176h-60l-4-47h64V82H133l12 141h111zm0 137l-52-14-3-38h-47l6 71 96 27z" />
      <path fill="#FFFFFF" d="M256 82v47h119l-11 123H256v47h66l-6 71-60 16v50l96-27 13-145 2-25 1-10 1-13 1-12z" />
    </svg>
  );
}

export function CssLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor">
      <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z" />
      <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z" />
      <path fill="#EBEBEB" d="M256 176h-60l-4-47h64V82H133l12 141h111zm0 137l-52-14-3-38h-47l6 71 96 27z" />
      <path fill="#FFFFFF" d="M256 82v47h119l-11 123H256v47h66l-6 71-60 16v50l96-27 13-145 2-25 1-10 1-13 1-12z" />
    </svg>
  );
}

export function JavaScriptLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 630 630">
      <rect width="630" height="630" fill="#F7DF1E" rx="60" />
      <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.4-38.1-25.4-17.3 0-28.3 11-28.3 25.4 0 17.7 11 25 35.5 35.5l14.8 6.34c50.3 21.6 79.9 43.6 79.9 93.9 0 54.1-42.7 82.5-97.7 82.5-54.98 0-90.5-26.2-106.9-60.9zm-180.4 1.3c9.7 17.3 18.6 31.7 39.7 31.7 20.3 0 33-8.5 33-41.4v-207.2h54.98v208.5c0 60.9-35.5 87.5-86.7 87.5-44.4 0-71.5-23.7-85.9-54.6z" />
    </svg>
  );
}

export function PhpLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 256 137" fill="none">
      <ellipse cx="128" cy="68.5" rx="128" ry="68.5" fill="#777BB4" />
      <path d="M72.2 42H48.4L37.1 94.6H54.2L58 77.2H68.8C80.2 77.2 87.9 71.3 90.3 60.4C92.4 50.7 86.8 42 72.2 42ZM70.4 62.8H59.5L62.7 48.2H71.2C76.8 48.2 78.8 51.5 77.8 56.1C76.9 60.3 74.4 62.8 70.4 62.8Z" fill="white" />
      <path d="M136.2 42H119.1L107.8 94.6H124.9L128.7 77.2H139.5C150.9 77.2 158.6 71.3 161 60.4C163.1 50.7 157.5 42 142.9 42H136.2ZM141.1 62.8H130.2L133.4 48.2H141.9C147.5 48.2 149.5 51.5 148.5 56.1C147.6 60.3 145.1 62.8 141.1 62.8Z" fill="white" />
      <path d="M192.5 42H175.4L164.1 94.6H181.2L185 77.2H195.8C207.2 77.2 214.9 71.3 217.3 60.4C219.4 50.7 213.8 42 199.2 42H192.5ZM197.4 62.8H186.5L189.7 48.2H198.2C203.8 48.2 205.8 51.5 204.8 56.1C203.9 60.3 201.4 62.8 197.4 62.8Z" fill="white" />
    </svg>
  );
}

export function LaravelLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path d="M89.3 24.2L52.8 3.5C51.1 2.5 48.9 2.5 47.2 3.5L10.7 24.2C9 25.2 8 27 8 28.9V70.3C8 72.3 9 74.1 10.7 75.1L47.2 95.8C48.9 96.8 51.1 96.8 52.8 95.8L89.3 75.1C91 74.1 92 72.3 92 70.3V28.9C92 27 91 25.2 89.3 24.2Z" fill="#FF2D20" />
      <path d="M50 14L80 31.3V66L50 83.3L20 66V31.3L50 14Z" fill="white" fillOpacity="0.2" />
      <path d="M50 49V83.3L80 66V31.3L50 49Z" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

export function NodeLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 256 288" fill="none">
      <path d="M128 0L248.8 69.8V209.3L128 279.1L7.2 209.3V69.8L128 0Z" fill="#339933" />
      <path d="M128 47.7L207.5 93.6V185.4L128 231.3L48.5 185.4V93.6L128 47.7Z" fill="white" />
      <path d="M128 73L185.5 106.2V172.8L128 206L70.5 172.8V106.2L128 73Z" fill="#339933" />
    </svg>
  );
}

export function PythonLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 256 255" fill="none">
      <path d="M126.9 0C60.7 0 64.9 28.7 64.9 28.7L65 58.4H129V67.8H38.5C4.3 67.8 0 98.7 0 98.7C0 147.1 27.6 142.3 27.6 142.3H44V119.3C44 92.5 67.9 92.5 67.9 92.5H131.7C155.8 92.5 155.8 70.8 155.8 70.8V23.6C155.8.5 126.9 0 126.9 0ZM95.3 18.2C101.4 18.2 106.3 23.2 106.3 29.3C106.3 35.4 101.4 40.3 95.3 40.3C89.2 40.3 84.3 35.4 84.3 29.3C84.3 23.2 89.2 18.2 95.3 18.2Z" fill="#3776AB" />
      <path d="M129.1 254.8C195.3 254.8 191.1 226.1 191.1 226.1L191 196.4H127V187H217.5C251.7 187 256 156.1 256 156.1C256 107.7 228.4 112.5 228.4 112.5H212V135.5C212 162.3 188.1 162.3 188.1 162.3H124.3C100.2 162.3 100.2 184 100.2 184V231.2C100.2 254.3 129.1 254.8 129.1 254.8ZM160.7 236.6C154.6 236.6 149.7 231.6 149.7 225.5C149.7 219.4 154.6 214.5 160.7 214.5C166.8 214.5 171.7 219.4 171.7 225.5C171.7 231.6 166.8 236.6 160.7 236.6Z" fill="#FFD43B" />
    </svg>
  );
}

export function MySqlLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 256 170" fill="none">
      <rect width="256" height="170" rx="20" fill="#00758F" />
      <text x="128" y="105" fill="#F29111" fontSize="56" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">MySQL</text>
    </svg>
  );
}

export function MongoLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 276" fill="none">
      <path d="M63.8 0C63.8 0 54.4 34.6 54.4 79.5C54.4 135 63.8 178.5 63.8 178.5C63.8 178.5 73.3 135 73.3 79.5C73.3 34.6 63.8 0 63.8 0Z" fill="#47A248" />
      <path d="M63.8 0C63.8 0 4.7 48.9 0 129.2C0 196.8 54.6 250.6 63.8 276C63.8 276 54.4 200 54.4 178.5C54.4 135 63.8 0 63.8 0Z" fill="#499D4A" />
      <path d="M63.8 0C63.8 0 122.9 48.9 127.6 129.2C127.6 196.8 73 250.6 63.8 276C63.8 276 73.2 200 73.2 178.5C73.2 135 63.8 0 63.8 0Z" fill="#589636" />
    </svg>
  );
}

export function PostgresLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 256 250" fill="none">
      <circle cx="128" cy="125" r="120" fill="#336791" />
      <path d="M128 40C85 40 60 75 60 120C60 165 90 200 128 200C166 200 196 165 196 120C196 75 171 40 128 40ZM128 70C148 70 166 90 166 120C166 150 148 170 128 170C108 170 90 150 90 120C90 90 108 70 128 70Z" fill="white" />
    </svg>
  );
}

export function FlutterLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 166 202" fill="none">
      <path d="M102.3 0L0 102.3L31.6 133.9L165.5 0H102.3Z" fill="#02569B" />
      <path d="M102.3 99.8L50.4 151.7L82 183.3L133.9 131.4L102.3 99.8Z" fill="#0175C2" />
      <path d="M82 183.3L100.8 202.1H164L113.6 151.7L82 183.3Z" fill="#02569B" />
      <path d="M165.5 99.8L133.9 131.4L113.6 151.7L164 202.1H165.5V99.8Z" fill="#29B6F6" />
    </svg>
  );
}

export function ReactNativeLogo({ className = 'w-6 h-6' }: LogoProps) {
  return <ReactLogo className={className} />;
}

export function AwsLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none">
      <text x="50" y="32" fill="#FF9900" fontSize="28" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">aws</text>
      <path d="M15 42C35 52 65 52 85 42" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" />
      <path d="M80 40L86 42L82 46" fill="#FF9900" />
    </svg>
  );
}

export function AzureLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="none">
      <path d="M24 16L54 48L32 80H12L24 16Z" fill="#0078D4" />
      <path d="M54 48L42 66L56 80H84L54 48Z" fill="#50E6FF" />
    </svg>
  );
}

export function FirebaseLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 144 198" fill="none">
      <path d="M24.7 154.5L1.6 112.1C-0.8 107.7 2.1 102.5 7.1 102.2L68.8 98.4L24.7 154.5Z" fill="#FFA000" />
      <path d="M78.6 4.9C76.2 0.8 70.3 0.6 67.5 4.5L0 137.9L72 178.5L144 137.9L78.6 4.9Z" fill="#FFCA28" />
      <path d="M142.4 112.1L119.3 154.5L75.2 98.4L136.9 102.2C141.9 102.5 144.8 107.7 142.4 112.1Z" fill="#F57C00" />
    </svg>
  );
}

