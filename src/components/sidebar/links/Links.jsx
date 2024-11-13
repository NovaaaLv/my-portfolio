import { motion } from "framer-motion";

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  const variant = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const ItemsVariant = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variant}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={ItemsVariant}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
