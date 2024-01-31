// Steps
import Intro from "./steps/Intro.md";
import Step1 from "./steps/Step1.md";
import Conclusion from "./steps/Conclusion.md";

export const config = {
	id: "hyphy-intro",
	name: "Introduction to HyPhy",
	subtitle: `by <a href="https://hyphy.org/" target="_blank"> ??? </a>`,
	description: "Introduction to HyPhy Basics",
	tags: ["hyphy", "selection"],
	tools: ["hyphy", "echo"],
	difficulty: ["beginner"],
	steps: [
		{ name: "Introduction to HyPhy", component: Intro },
		{ name: "Prepare data", component: Step1, subtitle: "Acquire FASTA and Build Tree", header: true },
		{ name: "The end", component: Conclusion, subtitle: "In Review", header: true }
	],
	files: ["repo.json", "issues.json", "issue.json"]
};
