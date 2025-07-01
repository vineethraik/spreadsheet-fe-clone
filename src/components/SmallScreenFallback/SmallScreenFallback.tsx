import type { JSX } from 'react';
import './SmallScreenFallback.scss';

 function SmallScreenFallback(): JSX.Element {
    return <div className="small_screen_fallback flex flex-col items-center justify-center ">
        <span className='small_screen_fallback_title text-2xl font-bold '>Small screen Size</span>
        <span className='small_screen_content text-lg  '>Please Use a larger screen to access the content</span>
    </div>;
}

export default SmallScreenFallback;