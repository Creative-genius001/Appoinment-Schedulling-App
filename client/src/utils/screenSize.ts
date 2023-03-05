export const checkScreenWidth = () =>{
     return window.innerWidth;
}

export const handleResize = () => {
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
} 