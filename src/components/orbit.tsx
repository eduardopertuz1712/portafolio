import type { Locale } from '@/content/site';

export function Orbit({ locale }: { locale: Locale }) {
  return <div className="orbit-visual" aria-hidden="true">
    <div className="orbit-glow" />
    <svg viewBox="0 0 540 540" className="orbit-svg" fill="none">
      <defs><radialGradient id="core-fill"><stop stopColor="#163d76" /><stop offset="1" stopColor="#0d213d" /></radialGradient><linearGradient id="orbit-line"><stop stopColor="#8bbdff" stopOpacity=".75"/><stop offset=".5" stopColor="#4779bd" stopOpacity=".2"/><stop offset="1" stopColor="#70bfdb" stopOpacity=".5"/></linearGradient></defs>
      <g stroke="#20324c" strokeWidth=".7"><path d="M270 18V522M18 270H522" strokeDasharray="3 9"/><circle cx="270" cy="270" r="226" strokeDasharray="2 8"/><circle cx="270" cy="270" r="173"/></g>
      <g className="orbital-tracks" stroke="url(#orbit-line)"><ellipse cx="270" cy="270" rx="235" ry="112" transform="rotate(-32 270 270)"/><ellipse cx="270" cy="270" rx="208" ry="119" transform="rotate(39 270 270)"/><ellipse cx="270" cy="270" rx="109" ry="211" transform="rotate(20 270 270)"/></g>
      <g stroke="#355b88" strokeWidth="1"><path d="M155 154L270 270L418 239M270 270L193 431M270 270L373 112" strokeDasharray="4 6"/></g>
      {Array.from({ length: 26 }, (_, i) => <circle key={i} cx={28 + ((i * 97) % 482)} cy={25 + ((i * 137) % 490)} r={i % 4 === 0 ? 1.6 : 1} fill={i % 4 === 0 ? '#a6c3e7' : '#3b5678'} />)}
      <g className="orbit-pulse"><circle cx="270" cy="270" r="64" fill="#326dc9" opacity=".06"/><circle cx="270" cy="270" r="51" stroke="#487fcc" strokeOpacity=".25"/></g>
      <rect x="224" y="233" width="92" height="74" rx="15" fill="url(#core-fill)" stroke="#527caf"/>
      <path d="m250 262-9 8 9 8m40-16 9 8-9 8m-15-17-10 34" stroke="#a8d5ff" strokeWidth="2" strokeLinecap="round"/>
      <g className="orbit-node"><circle cx="155" cy="154" r="6" fill="#a5c7ff"/><circle cx="155" cy="154" r="13" stroke="#4974ae" strokeOpacity=".5"/></g>
      <circle cx="418" cy="239" r="5" fill="#739ded"/><circle cx="193" cy="431" r="5" fill="#6acee4"/><circle cx="373" cy="112" r="3.5" fill="#728aaa"/>
      <g className="orbit-labels" fill="#b9c9e2" fontSize="12" letterSpacing="1.6"><text x="70" y="129">FRONTEND</text><text x="440" y="244">API</text><text x="198" y="465">DATABASE</text><text x="317" y="87">BUSINESS LOGIC</text></g>
      <g fill="#8198b8" fontSize="12"><text x="305" y="376">Clean Architecture</text><text x="87" y="324">REST APIs</text></g>
      <path d="M50 54h20M60 44v20M468 436h14M475 429v14" stroke="#638cbb" strokeWidth="1"/>
    </svg>
    <span className="orbit-caption mono">{locale === 'es' ? 'ARQUITECTURA DE SOFTWARE' : 'SOFTWARE ARCHITECTURE'}</span>
  </div>;
}
