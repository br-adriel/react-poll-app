export default function CirclePulse() {
  return (
    <svg className='animate-pulse h-16 w-16' viewBox='0 0 64 64'>
      <circle
        cx={32}
        cy={32}
        r={24}
        strokeWidth='8'
        className='stroke-pink-300 fill-none'
      />
    </svg>
  );
}
