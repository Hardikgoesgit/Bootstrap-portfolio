import { useState, useEffect } from 'react';

const Typewriter = ({ 
  words = ['Software Engineer'], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetweenWords = 2000 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (isPaused) {
        return;
      }

      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, delayBetweenWords);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;
