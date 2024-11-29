import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Projects', 'Experience', 'Contact Me'];

  const headerVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-white text-2xl font-bold hover:text-dark-pink transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-dark-pink transition-colors"
                custom={index}
                variants={menuItemVariants}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-dark-pink transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block py-2 text-white hover:text-dark-pink transition-colors"
                variants={menuItemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;