'use client';

import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState, useRef } from 'react';
import { getNextPage, getPreviousPage, PAGE_ORDER, getPageIndex } from '@/lib/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwipeNavigationProps {
  children: ReactNode;
}

export default function SwipeNavigation({ children }: SwipeNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get adjacent pages
  const nextPage = getNextPage(pathname);
  const previousPage = getPreviousPage(pathname);
  const currentIndex = getPageIndex(pathname);

  // Mount check
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mouse position tracking for side arrows
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const threshold = 50; // pixels from edge
      const windowWidth = window.innerWidth;
      
      // Show left arrow when mouse is near left edge and there's a previous page
      setShowLeftArrow(e.clientX < threshold && !!previousPage);
      
      // Show right arrow when mouse is near right edge and there's a next page
      setShowRightArrow(e.clientX > windowWidth - threshold && !!nextPage);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [previousPage, nextPage]);

  // Prefetch adjacent pages
  useEffect(() => {
    if (nextPage) router.prefetch(nextPage);
    if (previousPage) router.prefetch(previousPage);
  }, [nextPage, previousPage, router]);

  const navigateToPage = (path: string) => {
    if (isNavigating || path === pathname) return;
    
    setIsNavigating(true);
    router.push(path);
    
    // Reset navigation state after animation
    setTimeout(() => setIsNavigating(false), 500);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let isTouching = false;

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isTouching = true;
      setShowHint(true);
      setTimeout(() => setShowHint(false), 3000);
    };


    const handleTouchEnd = (e: TouchEvent) => {
      if (!isTouching || isNavigating) return;
      
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      
      // Only trigger if horizontal swipe is more significant than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0 && previousPage) {
          navigateToPage(previousPage);
        } else if (deltaX < 0 && nextPage) {
          navigateToPage(nextPage);
        }
      }
      
      isTouching = false;
    };

    // Wheel events for desktop (two-finger scroll)
    const handleWheel = (e: WheelEvent) => {
      if (isNavigating) return;
      
      // Only handle horizontal scrolling or shift+wheel
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        
        if (e.deltaX > 30 && nextPage) {
          navigateToPage(nextPage);
        } else if (e.deltaX < -30 && previousPage) {
          navigateToPage(previousPage);
        }
      }
    };

    // Keyboard events
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isNavigating) return;
      
      if (e.key === 'ArrowLeft' && previousPage) {
        navigateToPage(previousPage);
      } else if (e.key === 'ArrowRight' && nextPage) {
        navigateToPage(nextPage);
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextPage, previousPage, isNavigating]);

  const handleNavBarTouch = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 2000);
  };

  if (!isMounted) {
    return (
      <div ref={containerRef} className="relative">
        {children}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Page content with clean entrance animation */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{
          duration: 0.2,
          ease: 'easeOut'
        }}
      >
        {children}
      </motion.div>

      {/* Fixed bottom navigation indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brown-600/30 rounded-xl px-4 py-3 flex items-center gap-4 shadow-lg"
          onTouchStart={handleNavBarTouch}
          onMouseEnter={handleNavBarTouch}
        >
          {/* Previous page indicator */}
          <button
            onClick={() => previousPage && navigateToPage(previousPage)}
            disabled={!previousPage}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all font-medium ${
              previousPage 
                ? 'text-white hover:bg-white/20 cursor-pointer hover:scale-105' 
                : 'text-white/50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            {previousPage && (
              <span className="hidden sm:block text-sm">
                {PAGE_ORDER.find(p => p.path === previousPage)?.title}
              </span>
            )}
          </button>

          {/* Page dots indicator */}
          <div className="flex gap-2">
            {PAGE_ORDER.map((page, index) => (
              <button
                key={page.path}
                onClick={() => navigateToPage(page.path)}
                className={`w-3 h-3 rounded-full transition-all hover:scale-110 ${
                  index === currentIndex
                    ? 'bg-white shadow-lg shadow-white/30 scale-125'
                    : 'bg-white/60 hover:bg-white/90'
                }`}
              />
            ))}
          </div>

          {/* Next page indicator */}
          <button
            onClick={() => nextPage && navigateToPage(nextPage)}
            disabled={!nextPage}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all font-medium ${
              nextPage 
                ? 'text-white hover:bg-white/20 cursor-pointer hover:scale-105' 
                : 'text-white/50 cursor-not-allowed'
            }`}
          >
            {nextPage && (
              <span className="hidden sm:block text-sm">
                {PAGE_ORDER.find(p => p.path === nextPage)?.title}
              </span>
            )}
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Usage hint - only show on mobile touch or desktop initially */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showHint ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-4"
        >
          <p className="text-sm text-brown-600 font-semibold hidden md:block drop-shadow-sm">
            Piltaster • Shift+scroll • Two-finger scroll
          </p>
          <p className="text-sm text-brown-600 font-semibold md:hidden drop-shadow-sm">
            Swipe til høyre/venstre
          </p>
        </motion.div>
      </div>

      {/* Side navigation arrows */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: showLeftArrow ? 1 : 0, x: showLeftArrow ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50"
      >
        <button
          onClick={() => previousPage && navigateToPage(previousPage)}
          className="bg-brown-600/40 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-brown-600/60 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: showRightArrow ? 1 : 0, x: showRightArrow ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
      >
        <button
          onClick={() => nextPage && navigateToPage(nextPage)}
          className="bg-brown-600/40 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-brown-600/60 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </motion.div>
    </div>
  );
}