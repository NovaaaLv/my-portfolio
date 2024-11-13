import "./service.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	const ref = useRef();

	const inInView = useInView(ref, { margin: "-100px" });

	const cards = [
		{
			title: "Branding",
			desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quae facere eveniet velit porro autem voluptas distinctio id deserunt ipsa veniam nobis minus quam voluptatum, cum rerum expedita quis impedit",
			button: "Go",
		},
		{
			title: "Branding",
			desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quae facere eveniet velit porro autem voluptas distinctio id deserunt ipsa veniam nobis minus quam voluptatum, cum rerum expedita quis impedit",
			button: "Go",
		},
		{
			title: "Branding",
			desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quae facere eveniet velit porro autem voluptas distinctio id deserunt ipsa veniam nobis minus quam voluptatum, cum rerum expedita quis impedit",
			button: "Go",
		},
	];

	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			// whileInView="animate"
			ref={ref}
			animate={inInView && "animate"}
		>
			<motion.div className="textContainer" variants={variants}>
				<p>
					focus helping your brand grow <br /> and move forward
				</p>
				<hr />
			</motion.div>
			<motion.div className="titleContainer" variants={variants}>
				<div className="title">
					<img src="/people.webp" alt="" />
					<h1>
						<b>unique</b> Ideas
					</h1>
				</div>
				<div className="title">
					<h1>
						<b>for your</b> Business
					</h1>
					<button>WHAT WE DO</button>
				</div>
			</motion.div>
			<motion.div className="listContainer" variants={variants}>
				{cards.map((card, index) => (
					<motion.div
						className="box"
						key={index}
						whileHover={{ background: "white", color: "black" }}
					>
						<h2>{card.title}</h2>
						<p>{card.desk}</p>
						<button>{card.button}</button>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Services;
