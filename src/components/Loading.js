import React from 'react'

export const Loagding = (  ) => {
  return (
    <div >
     <svg width="50%" height="50%" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"  className='mx-auto  m-10 w-[80X] stroke-green-600'>
    <g fill="none" >
        <g transform="translate(1 1)" strokeWidth="2">
            <circle />
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
            </path>
        </g>
    </g>
</svg>
    </div>
  )
}
