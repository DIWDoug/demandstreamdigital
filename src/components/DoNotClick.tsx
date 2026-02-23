import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ERROR_MESSAGES = [
  'Device is not ready',
  'Cannot create thread',
  'Fail on INT 24',
  'Undefined variable',
  'Incorrect function',
  'Undefined constant',
  'DosMuxSemWait did not execute',
  'Failed to open stream',
  'Parameter is incorrect',
  'The segment is unlocked',
  'The path is invalid',
  'Reached the EOF',
  'Access is denied',
  'Parse error',
  'Headers already sent',
  'Uncaught exception',
  'Stack overflow',
  'Out of memory',
  'Segmentation fault',
  'Bus error',
];

interface ErrorDialog {
  id: number;
  message: string;
  x: number;
  y: number;
}

const SystemErrorDialog = ({ dialog, onClose }: { dialog: ErrorDialog; onClose: () => void }) => (
  <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{ duration: 0.15 }}
    className="fixed z-[9999] select-none"
    style={{ left: dialog.x, top: dialog.y }}
  >
    <div className="w-[220px] border-2 border-[#808080] shadow-[2px_2px_0_#000]" style={{ fontFamily: '"MS Sans Serif", Tahoma, sans-serif' }}>
      {/* Title bar */}
      <div className="bg-[#000080] text-white text-xs font-bold px-1.5 py-0.5 flex items-center justify-between">
        <span>System message</span>
        <button
          onClick={onClose}
          className="bg-[#c0c0c0] text-black border border-[#808080] w-4 h-4 flex items-center justify-center text-[10px] font-bold leading-none hover:bg-[#dfdfdf] active:border-inset"
        >
          ✕
        </button>
      </div>
      {/* Body */}
      <div className="bg-[#c0c0c0] p-4 flex flex-col items-center gap-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            X
          </div>
          <p className="text-xs text-black leading-relaxed">{dialog.message}</p>
        </div>
        <button
          onClick={onClose}
          className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] px-6 py-1 text-xs text-black font-normal hover:bg-[#dfdfdf] active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white"
        >
          Ok
        </button>
      </div>
    </div>
  </motion.div>
);

const CrashPage = ({ onReturn }: { onReturn: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="fixed inset-0 z-[10001] bg-[#1a1a2e] text-left overflow-auto"
    style={{ fontFamily: '"Courier New", monospace' }}
  >
    {/* Close button */}
    <button
      onClick={onReturn}
      className="fixed top-4 right-4 w-8 h-8 rounded-full border border-gray-500 text-gray-400 hover:text-white hover:border-white transition-colors text-sm z-[10002]"
    >
      ✕
    </button>

    <div className="max-w-3xl mx-auto p-8 pt-16 space-y-8">
      <h1 className="text-2xl md:text-3xl text-gray-400">
        {'<h1>'}
        <span className="font-bold text-white">ERROR 0x0560.100EA</span>
        {'</h1>'}
      </h1>

      <p className="text-base leading-relaxed">
        <span className="text-[#e8a838]">{'<A problem="'}</span>
        <span className="font-bold text-[#e8a838]">was detected...,</span>
        <span className="text-[#e8a838]">{'">'}</span>
        <span className="text-gray-300">you are very naughty and clicked on the button we specifically told you </span>
        <span className="font-bold text-gray-100">NOT TO CLICK</span>
        <span className="text-gray-300"> and now you crashed our</span>
        <span className="text-[#e8a838]">{'</website.>'}</span>
      </p>

      <p className="text-base leading-relaxed">
        <span className="text-[#4ecdc4]">{'<Just Kidding...="'}</span>
        <span className="font-bold text-[#4ecdc4]">we had a feeling you would do that...</span>
        <span className="text-[#4ecdc4]">{'">'}</span>
        <span className="text-gray-300">and don't worry, you didn't break our site...just Hank, our IT guy's </span>
        <span className="text-[#4ecdc4]">{'</heart.>'}</span>
      </p>

      <p className="text-base leading-relaxed">
        <span className="text-[#e8a838]">{'<In fact=", '}</span>
        <span className="font-bold italic text-[#e8a838]">we can help predict exactly where your customers will look,</span>
        <span className="text-[#e8a838]">{'">'}</span>
        <span className="text-gray-300"> click and interact on your website </span>
        <span className="text-[#e8a838]">{'</too>'}.</span>
      </p>

      <p className="text-base leading-relaxed text-[#4ecdc4]">
        {'<Imagine>'}
        <span className="text-gray-300">how a great strategy would impact your website conversions, sales, and your bottom </span>
        {'</line?>'}
      </p>

      <p className="text-gray-500 tracking-[0.3em]">…………………</p>
      <p className="text-gray-500 tracking-[0.3em]">…………………</p>

      <p className="text-base leading-relaxed">
        <span className="text-[#4ecdc4]">{'<Ready to="talk?">'}</span>
        <span className="text-gray-300"> Call us today at </span>
        <span className="text-[#4ecdc4]">{'</'}</span>
        <a href="tel:7273176826" className="text-[#4ecdc4] underline hover:text-white transition-colors">
          727.317.6826
        </a>
        <span className="text-[#4ecdc4]">{'>'}</span>
      </p>

      <div className="pt-4">
        <button
          onClick={onReturn}
          className="border border-white text-white px-6 py-3 text-sm hover:bg-white hover:text-[#1a1a2e] transition-colors"
        >
          Return To Site
        </button>
      </div>
    </div>
  </motion.div>
);

type Phase = 'idle' | 'dialogs' | 'explosion' | 'crash';

const DoNotClick = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [dialogs, setDialogs] = useState<ErrorDialog[]>([]);
  const [nextId, setNextId] = useState(0);

  const spawnDialog = useCallback(() => {
    const msg = ERROR_MESSAGES[Math.floor(Math.random() * ERROR_MESSAGES.length)];
    const x = Math.random() * (window.innerWidth - 260);
    const y = Math.random() * (window.innerHeight - 180);
    setNextId(prev => {
      const id = prev;
      setDialogs(d => [...d, { id, message: msg, x, y }]);
      return prev + 1;
    });
  }, []);

  const removeDialog = useCallback((id: number) => {
    setDialogs(d => d.filter(dlg => dlg.id !== id));
  }, []);

  useEffect(() => {
    if (phase !== 'dialogs') return;

    // Spawn dialogs rapidly
    let count = 0;
    const maxDialogs = 15;
    const interval = setInterval(() => {
      if (count >= maxDialogs) {
        clearInterval(interval);
        // After dialogs, go to explosion
        setTimeout(() => setPhase('explosion'), 1500);
        return;
      }
      spawnDialog();
      count++;
    }, 200);

    return () => clearInterval(interval);
  }, [phase, spawnDialog]);

  useEffect(() => {
    if (phase !== 'explosion') return;
    // Explosion lasts 2 seconds then show crash page
    const timer = setTimeout(() => {
      setPhase('crash');
      setDialogs([]);
    }, 2000);
    return () => clearTimeout(timer);
  }, [phase]);

  const handleClick = () => {
    if (phase !== 'idle') return;
    setPhase('dialogs');
  };

  const handleReturn = () => {
    setPhase('idle');
    setDialogs([]);
  };

  return (
    <>
      {/* The button - visible in header area or as floating */}
      {phase === 'idle' && (
        <button
          onClick={handleClick}
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded transition-colors uppercase tracking-wider"
        >
          Do Not Click
        </button>
      )}

      {/* Error dialogs overlay */}
      <AnimatePresence>
        {dialogs.map(d => (
          <SystemErrorDialog key={d.id} dialog={d} onClose={() => removeDialog(d.id)} />
        ))}
      </AnimatePresence>

      {/* Explosion overlay */}
      <AnimatePresence>
        {phase === 'explosion' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000]"
          >
            {/* Fire/explosion effect using CSS gradients */}
            <div className="absolute inset-0 bg-black">
              <div
                className="absolute inset-0 animate-pulse"
                style={{
                  background: `
                    radial-gradient(ellipse at 30% 50%, #ff6600 0%, transparent 50%),
                    radial-gradient(ellipse at 70% 30%, #ff9900 0%, transparent 40%),
                    radial-gradient(ellipse at 50% 70%, #ff3300 0%, transparent 50%),
                    radial-gradient(ellipse at 20% 20%, #ffcc00 0%, transparent 30%),
                    radial-gradient(ellipse at 80% 80%, #ff6600 0%, transparent 45%),
                    radial-gradient(ellipse at 50% 40%, #ff4400 0%, transparent 60%)
                  `,
                }}
              />
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  background: `
                    radial-gradient(ellipse at 60% 60%, #ffaa00 0%, transparent 35%),
                    radial-gradient(ellipse at 40% 30%, #ff5500 0%, transparent 45%),
                    radial-gradient(ellipse at 80% 50%, #ffcc00 0%, transparent 30%),
                    radial-gradient(ellipse at 20% 70%, #ff7700 0%, transparent 40%)
                  `,
                  animation: 'pulse 0.3s ease-in-out infinite alternate',
                }}
              />
              {/* Screen shake effect */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  x: [0, -5, 5, -3, 3, 0],
                  y: [0, 3, -5, 5, -3, 0],
                }}
                transition={{ duration: 0.2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Crash page */}
      <AnimatePresence>
        {phase === 'crash' && <CrashPage onReturn={handleReturn} />}
      </AnimatePresence>
    </>
  );
};

export default DoNotClick;
