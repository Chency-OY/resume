import React, { useState, useEffect } from 'react';

const Loader = React.memo(({ isLoading, setIsLoading }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isLoading) {
      // 设置5秒超时
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        setShowError(true);
      }, 5000);
    }

    // 清除超时定时器
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isLoading, setIsLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDFBF7] bg-opacity-90 backdrop-blur-sm">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 relative">
          <div className="absolute inset-0 border-4 border-[#D4AF37]/20 rounded-full"></div>
          <div className="absolute inset-0 border-t-4 border-[#6FCF97] rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-2 border-[#F2994A]/30 rounded-full"></div>
        </div>
        <p className="text-[#4A3B32] font-light tracking-wide">加载中...</p>
        {showError && (
          <p className="text-[#F2994A] text-sm mt-2 font-light">
            加载超时，请稍后重试
          </p>
        )}
      </div>
    </div>
  );
});

Loader.displayName = 'Loader';

export default Loader;