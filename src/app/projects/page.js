import Image from "next/image";
import Card from "../../components/Card.js";

export default function Home() {
  const projects = [
    {
      name: "Enhanced KG based LLM-RAG system",
      desc: "A more accurate and grounded content generator which uses an LLM with a KG as its knowledge base.",
      gitHublink: "https://github.com/RamPrakhyath05/enhanced-kg-llm",
      deploymentlink: "https://github.com/RamPrakhyath05/enhanced-kg-llm"
    },
    {
      name: "Mditor",
      desc: "A real time collaborative markdown editor.",
      gitHublink: "https://github.com/RamPrakhyath05/editor",
      deploymentlink: "https://github.com/RamPrakhyath05/editor"
    }
  ];
  return (
    <div className="p-4">
      <h1 className="text-6xl p-5">Projects</h1>
      <div className="mt-5 grid grid-cols-3 gap-10 p-5">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.name}
            description={project.desc}
            gitHublink={project.gitHublink}
            deploymentlink={project.deploymentlink}
          />
        ))}
      </div>
    </div>
  );
}
