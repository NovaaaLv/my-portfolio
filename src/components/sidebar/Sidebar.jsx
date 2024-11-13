import Links from "./links/Links";
import "./sidebar.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
	const [open, setOpen] = useState(false);

	const variant = {
		open: {
			clipPath: "circle(1200px at 50px 50px)",
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 40,
			},
		},
		closed: {
			clipPath: "circle(30px at 50px 50px)",
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 40,
			},
		},
	};

	return (
		<motion.div className="sidebar" animate={open ? "open" : "closed"}>
			<motion.div className="bg" variants={variant}>
				<Links />
			</motion.div>
			<ToggleButton setOpen={setOpen} />
		</motion.div>
	);
};

export default Sidebar;
