'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function FaviconSwitcher() {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateFavicon = (isDark: boolean) => {
      console.log('🎨 Updating favicon to:', isDark ? 'dark' : 'light');
      
      try {
        const existingFavicons = document.querySelectorAll('link[rel="icon"]');
        existingFavicons.forEach(favicon => {
          if (favicon.parentNode) {
            favicon.parentNode.removeChild(favicon);
          }
        });
      } catch (error) {
        console.warn('⚠️ Error removing existing favicons:', error);
      }

      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/x-icon';
      link.href = isDark ? '/favicon-dark.ico' : '/favicon-light.ico';
      link.setAttribute('data-theme', 'dynamic');
      
      try {
        if (document.head) {
          document.head.appendChild(link);
          console.log('✅ Favicon updated:', link.href);
        }
      } catch (error) {
        console.error('❌ Error adding favicon:', error);
      }
    };

    const isDark = resolvedTheme === 'dark';
    
    console.log('🔍 Theme debug:', {
      theme,
      systemTheme,
      resolvedTheme,
      isDark,
      mounted
    });

    updateFavicon(isDark);
  }, [theme, systemTheme, resolvedTheme, mounted]);

  return null;
}
